export default function handler(req, res) {
  const needle = require('needle')
  const token = process.env.TWITTER_BEARER_TOKEN
  const endpointUrl = 'https://api.twitter.com/2/tweets/search/recent'

  async function getRequest() {
    const params = {
      query: 'from:DylanShively6',
      max_results: '20'
    }

    const res = await needle('get', endpointUrl, params, {
      headers: {
        'User-Agent': 'v2RecentSearchJS',
        authorization: `Bearer ${token}`
      }
    })

    if (res.body) {
      return res.body
    } else {
      return
    }
  }

  ;(async () => {
    try {
      const tweets = await getRequest()
      res.status(200).json({ tweets })
      // console.log(response)
    } catch (e) {
      console.log(e)
    }
  })()
}
