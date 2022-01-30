import { fetchAPI } from '../../lib/api'
import ArticleLayout from '../../components/layouts/ArticleLayout'
import PostsGrid from '../../components/PostsGrid/PostsGrid.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import NewsLetterSignup from '../../sections/NewsLetterSignup/NewsLetterSignup.component'
import Link from '../../components/Link/Link.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NextSeo } from 'next-seo'

export default function Cat({ articles, catName }) {
  return (
    <>
      <NextSeo
        title={catName}
        description='KillerWhaleCrypto focuses on cryptocurrency trading and automated trading bots. We discuss and educate on chart patterns, technical analysis for various crypto like bitcon (BTC), Ethereum (ETH) and altcoins.
        Join us today and CHANGE THE WAY YOU TRADE'
      />
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
    paths: categories?.map(({ slug }) => {
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
