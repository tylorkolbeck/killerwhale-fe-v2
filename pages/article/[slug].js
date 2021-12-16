import ArticlesLayout from '../../components/layouts/ArticlesLayout'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { fetchAPI } from '../../lib/api'
import Image from 'next/image'
import { getStrapiMedia } from '../../utils/media'
import Markdown from '../../components/Markdown/Markdown.component'

const Article = ({ postData, coinList }) => {
  console.log(postData)
  return (
    <>
      <Image
        src={getStrapiMedia(postData.image.url)}
        alt='image'
        height='200'
        width='400'
      ></Image>
      <Markdown coinList={coinList}>{postData.content}</Markdown>
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
