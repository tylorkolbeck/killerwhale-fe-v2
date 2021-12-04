const API_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`

export async function getSortedPostsData(limit, filter) {
  let queryString = limit
    ? `${API_URL}/articles?_sort=publishedAt:DESC&_limit=${limit}${
        filter ? filter : ''
      }`
    : `${API_URL}/articles?_sort=publishedAt:DESC`

  const response = await fetch(queryString)
  const posts = await response.json()
  return posts
}

export async function getAllPostsIds() {
  const posts = await getSortedPostsData()

  return posts.map((post) => {
    return {
      params: {
        slug: post.slug
      }
    }
  })
}

export async function getAllPostsSlugs() {
  const posts = await getSortedPostsData()

  return posts.map((post) => post.slug)
}

export async function getPostData(slug) {
  const response = await fetch(`${API_URL}/articles/${slug}`)
  const articleData = await response.json()

  return {
    slug,
    ...articleData
  }
}
