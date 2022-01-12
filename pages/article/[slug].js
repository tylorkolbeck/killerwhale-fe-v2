import Image from 'next/image'
import styles from './article.module.scss'
import { DateTime } from 'luxon'
import { getStrapiMedia } from '../../utils/media'
import ArticleLayout from '../../components/layouts/ArticleLayout'
import PostsGrid from '../../components/PostsGrid/PostsGrid.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { fetchAPI } from '../../lib/api'
import NewsLetterSignup from '../../sections/NewsLetterSignup/NewsLetterSignup.component'
import Markdown from '../../components/Markdown/Markdown.component'
import { NextSeo } from 'next-seo'

const Article = ({ articles, postData }) => {
  let formattedDate = DateTime.fromISO(postData?.publishedAt).toLocaleString(
    DateTime.DATE_MED
  )

  return (
    <>
      <NextSeo
        title={postData?.title}
        description='KillerWhaleCrypto focuses on cryptocurrency trading and automated trading bots. We discuss and educate on chart patterns, technical analysis for various crypto like bitcon (BTC), Ethereum (ETH) and altcoins.
        Join us today and CHANGE THE WAY YOU TRADE'
      />
      <div>
        <h1 className={styles.title}>{postData?.title}</h1>
        {postData?.image && (
          <Image
            src={getStrapiMedia(postData?.image?.url)}
            alt={postData?.image?.alternativeText ? postData?.image?.alternativeText: 'presentational'}
            height='485px'
            width='920px'
          />
        )}
        <h2 className={styles.description}>{postData?.description}</h2>
        <p className={styles.author}>
          {postData?.author?.name} - {formattedDate}
        </p>
        <Markdown>{postData?.content}</Markdown>
      </div>
      <div className='mt-4'>
        <SectionHeader header='Most Recent' />
        <PostsGrid articles={articles?.slice(1, 7)} />
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
