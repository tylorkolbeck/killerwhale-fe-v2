import { fetchAPI } from '../../lib/api'
import ArticleLayout from '../../components/layouts/ArticleLayout'
import PostsGrid from '../../components/PostsGrid/PostsGrid.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import NewsLetterSignup from '../../sections/NewsLetterSignup/NewsLetterSignup.component'
import Link from '../../components/Link/Link.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Cat({ articles, catName }) {
  return (
    <>
      <div className='mt-2'>
        <SectionHeader header={`News - ${catName}`}>
          <Link linkTo='/articles'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className='ml'>All News</span>
          </Link>
        </SectionHeader>
        <PostsGrid articles={articles} />
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
      articles: cats.articles ? cats.articles.reverse() : [],
      catName
    },
    revalidate: 1
  }
}
