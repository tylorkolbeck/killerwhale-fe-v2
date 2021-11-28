const axios = require('axios')

let lastTweets = []

// App rate limit: 450 requests per 15-minute window shared among all users of your app
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = process.env.TWITTER_BEARER_TOKEN
    const endpointUrl = process.env.TWITTER_TWEETS_API_URL
    const twitterAccount = `from:${process.env.TWITTER_ACCOUNT}`
    const MAX_RESULTS = 20

    async function fetchTweets() {
      const params = {
        query: twitterAccount,
        max_results: MAX_RESULTS
      }

      const headers = {
        'User-Agent': 'v2RecentSearchJS',
        authorization: `Bearer ${token}`
      }

      return axios.get(endpointUrl, {
        headers,
        params
      })
    }

    let tweets
    let returnError

    await fetchTweets()
      .then(({ data }) => {
        if (data.errors) {
          lastTweets = data.data
          tweets = lastTweets
        } else {
          tweets = data.data
        }
      })
      .catch((err) => {
        returnError = err.message
      })

    if (!returnError) {
      res.status(200).json({ tweets })
    } else {
      res.status(500).json({ error: returnError })
    }
  }
}
