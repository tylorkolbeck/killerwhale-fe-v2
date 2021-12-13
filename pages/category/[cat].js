import { fetchAPI } from '../../lib/api'

export default function Cat() {
  return <p>Hi</p>
}

export async function getStaticPaths() {
  const categories = await fetchAPI('/categories')
  return {
    paths: categories.map(({ slug }) => {
      return { params: { cat: slug } }
    }),
    fallback: true
  }
}
export async function getStaticProps({ params }) {
  console.log(params)
  const articles = await fetchAPI(
    `/articles?_sort=publishedAt:DESC&category[slug]_eq=${params.cat}`
  )
  console.log(articles)
  return {
    props: {
      articles
    },
    revalidate: 1
  }
}
