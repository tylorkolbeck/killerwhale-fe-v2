import { fetchAPI } from '../../lib/api'
import ArticleLayout from '../../components/layouts/ArticleLayout'
import PostsGrid from '../../components/PostsGrid/PostsGrid.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import NewsLetterSignup from '../../sections/NewsLetterSignup/NewsLetterSignup.component'

export default function Cat({ cats, catName }) {
  return (
    <>
      <div className='mt-2'>
        <SectionHeader header={catName} />
        <PostsGrid articles={cats.articles} />
      </div>
      <div className='mt-4'>
        <NewsLetterSignup />
      </div>
    </>
  )
}

Cat.Layout = ArticleLayout

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
  const catName = params.cat
  const cats = await fetchAPI(`/categories/${catName}`)
  return {
    props: {
      articles,
      cats,
      catName
    },
    revalidate: 1
  }
}
