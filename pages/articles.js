import { fetchAPI } from '../lib/api'
import Image from 'next/image'
import { getStrapiMedia } from '../utils/media'
import Link from '../components/Link/Link.component'
import RecentPosts from '../components/RecentPosts/RecentPosts.component.js'
import NewsLetterSignup from '../sections/NewsLetterSignup/NewsLetterSignup.component'
import ArticleLayout from '../components/layouts/ArticleLayout'
import { DateTime } from 'luxon'
import SectionHeader from '../components/SectionHeader/SectionHeader.component'

export default function Articles({ articles, categories }) {
  const renderCategories = categories.map((category) => {
    return (
      <span className='tag is-success' key={category.id}>
        {category.name}
      </span>
    )
  })
  const latestPost = articles[0]
  let publishedDate = DateTime.fromISO(latestPost.publishedAt).toLocaleString(
    DateTime.DATE_MED
  )
  return (
    <>
      {/* <h2 className='fs-400'>Categories</h2> */}
      {/* <div>{renderCategories}</div> */}
      <div className='mt-2'>
        <SectionHeader header='Latest News' />
      </div>

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
      <p className='mb-1 '>{latestPost.description}</p>
      <p className='mb-2'>
        {latestPost.author.name} - {publishedDate}
      </p>

      <div className='mt-4'>
        <SectionHeader header='Most Recent' />
        {/* <h1 className='mt-3 ff-good fs-700'>Most Recent</h1> */}
        <RecentPosts articles={articles.slice(1, 7)} />
      </div>
      <div className='mt-4'>
        <NewsLetterSignup />
      </div>
    </>
  )
}

Articles.Layout = ArticleLayout

export async function getStaticProps() {
  // Run API calls in parallel

  const articles = await fetchAPI('/articles?_sort=publishedAt:DESC&_limit=7')
  const categories = await fetchAPI('/categories')
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
