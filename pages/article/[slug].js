import Image from 'next/image'
import styles from './article.module.scss'
import Link from '../../components/Link/Link.component'
import { DateTime } from 'luxon'
import { getStrapiMedia } from '../../utils/media'
import ArticleLayout from '../../components/layouts/ArticleLayout'
import PostsGrid from '../../components/PostsGrid/PostsGrid.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { fetchAPI } from '../../lib/api'
import NewsLetterSignup from '../../sections/NewsLetterSignup/NewsLetterSignup.component'
import Markdown from '../../components/Markdown/Markdown.component'

const Article = ({ articles, postData }) => {
  let formattedDate = DateTime.fromISO(postData.publishedAt).toLocaleString(
    DateTime.DATE_MED
  )

  return (
    <>
      <div>
        <h1 className={styles.title}>{postData.title}</h1>
        <Image
          src={getStrapiMedia(postData.image.url)}
          alt={postData.image.alternativeText}
          height={postData.image.height}
          width={postData.image.width}
        />
        <h2 className={styles.description}>{postData.description}</h2>
        <p className={styles.author}>
          {postData.author.name} - {formattedDate}
        </p>
        <Markdown>{postData.content}</Markdown>
      </div>
      {/* <div className={styles.nav}>
        <Link type='nav' linkTo='#'>
          Previous
        </Link>
        <Link type='nav' linkTo='#'>
          Next
        </Link>
      </div> */}
      <div className='mt-4'>
        <SectionHeader header='Most Recent' />
        {/* <h1 className='mt-3 ff-good fs-700'>Most Recent</h1> */}
        <PostsGrid articles={articles.slice(1, 7)} />
      </div>
      <div className='mt-4'>
        <NewsLetterSignup />
      </div>
    </>
  )
}

Article.Layout = ArticleLayout

export default Article

export async function getStaticPaths() {
  const paths = await getAllPostsIds()
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  const articles = await fetchAPI('/articles?_sort=publishedAt:DESC&_limit=7')
  return {
    props: {
      articles,
      postData
    },
    revalidate: 1
  }
}

Article.defaultProps = {
  postData: {}
}
