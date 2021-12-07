import Image from 'next/image'
import styles from './article.module.scss'
import { DateTime } from 'luxon'
import ArticleLayout from '../../components/layouts/ArticleLayout'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { fetchAPI } from '../../lib/api'

const Article = ({ postData }) => {
  let formattedDate = DateTime.fromISO(postData.created_at).toFormat(
    'dd MMM yyyy'
  )
  let formattedContent = postData.content
    .replace(/<br\/>/g, '')
    .split('\n')
    .map((string, index) => (
      <div key={index}>
        {string}
        <br />
      </div>
    ))

  // console.log(postData)
  return (
    <>
      <div>
        <h1 className={styles.title}>{postData.title}</h1>
        <Image
          src={postData.image.url}
          alt={postData.image.alternativeText}
          height={postData.image.height}
          width={postData.image.width}
        />
        <h2 className={styles.description}>{postData.description}</h2>
        <p className={styles.author}>
          {postData.author.name} - {formattedDate}
        </p>
        <div className={styles.content}>{formattedContent}</div>
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
  const { coin } = await fetchAPI('/coin-list')
  console.log(coin)
  return {
    props: {
      postData,
      coinList: coin
    },
    revalidate: 1
  }
}

Article.defaultProps = {
  postData: {}
}
