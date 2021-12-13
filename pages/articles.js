import { fetchAPI } from '../lib/api'
import Image from 'next/image'
import Button from '../components/Button/Button.component'
import { getStrapiMedia } from '../utils/media'
import Link from '../components/Link/Link.component'
import RecentPosts from '../components/RecentPosts/RecentPosts.component.js'
import NewsLetterSignup from '../sections/NewsLetterSignup/NewsLetterSignup.component'
import ArticleLayout from '../components/layouts/ArticleLayout'
import { DateTime } from 'luxon'

export default function Articles({ articles }) {
  // console.log(articles.category.name)
  const categories = articles.map((category) => {
    return (
      <Link linkTo={`/article/${category.slug}`} key={category.id}>
        <Button key={category.id}>{category.name}</Button>
      </Link>
    )
  })
  const latestPost = articles[0]
  let publishedDate = DateTime.fromISO(latestPost.publishedAt).toLocaleString(
    DateTime.DATE_MED
  )
  return (
    <>
      <h2>Categories</h2>
      <div>{categories}</div>
      <h1>Latest Post</h1>
      <Link linkTo={`/article/${latestPost.slug}`} key={latestPost.id}>
        <Image
          src={getStrapiMedia(latestPost.image.url)}
          alt={latestPost.image.alternativeText}
          height={latestPost.image.height}
          width={latestPost.image.width}
          className='mb-2'
        />
      </Link>
      <h2 className='mb-1 bold fs-600 mt-1'>{latestPost.title}</h2>
      <p className='mb-1'>{latestPost.description}</p>
      <p className='mb-2'>
        {latestPost.author.name} - {publishedDate}
      </p>
      <div className='bg-light container'>
        <NewsLetterSignup />
      </div>
      <h1 className='mt-3 ff-good fs-700'>Most Recent</h1>
      <RecentPosts articles={articles.slice(1, 7)} />
    </>
  )
}

Articles.Layout = ArticleLayout

export async function getStaticProps() {
  // Run API calls in parallel

  const articles = await fetchAPI('/articles?_sort=publishedAt:DESC&_limit=7')
  const categories = await fetchAPI('/categories')
  // console.log(articles)
  return {
    props: {
      articles,
      categories: categories.map(({ id, name, slug }) => {
        return { id, name, slug }
      })
    },
    revalidate: 1
  }
}
