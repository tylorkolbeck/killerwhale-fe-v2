// import Image from 'next/image' // Do all of the images have the same domain?
import styles from './article.module.scss'
import ArticlesLayout from '../../components/layouts/ArticlesLayout'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { fetchAPI } from '../../lib/api'

const Article = ({ postData }) => {
  // console.log(postData)
  return (
    <>
      <div>
        <h1 className={styles.title}>{postData.title}</h1>
        <img src={postData.image.url} alt={postData.image.alternativeText} />
        <h2 className={styles.description}>{postData.description}</h2>
        <p className={styles.author}>
          {postData.author.name}, {postData.created_at}
        </p>
        <p className={styles.content}>{postData.content}</p>
      </div>
    </>
  )
}

Article.Layout = ArticlesLayout

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
