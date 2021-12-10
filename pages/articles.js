import { fetchAPI } from '../lib/api'
import RecentPosts from '../components/RecentPosts/RecentPosts.component.js'

export default function Articles({ articles, authors }) {
  console.log(articles)
  return <RecentPosts articles={articles} />
}

export async function getStaticProps() {
  // Run API calls in parallel

  const articles = await fetchAPI('/articles?_sort=publishedAt:DESC&_limit=7')
  const authors = await fetchAPI('/writers')

  return {
    props: { articles, authors },
    revalidate: 1
  }
}
