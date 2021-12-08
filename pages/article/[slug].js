import ArticlesLayout from '../../components/layouts/ArticlesLayout'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { fetchAPI } from '../../lib/api'
import Image from 'next/image'
import { getStrapiMedia } from '../../utils/media'

const Article = ({ postData }) => {
  console.log(postData.image.url)
  return (
    <Image
      src={getStrapiMedia(postData.image.url)}
      alt='image'
      height='200'
      width='400'
    ></Image>
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
