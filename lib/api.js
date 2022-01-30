export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, cb) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  try {
    const data = await response.json()
    if (cb) {
      cb(data)
    }
    return data
  } catch (error) {
    return null
  }
}
