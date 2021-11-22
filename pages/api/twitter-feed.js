export default function handler(req, res) {
  const needle = require('needle')
  const token = process.env.TWITTER_BEARER_TOKEN
  const endpointUrl = 'https://api.twitter.com/2/tweets/search/recent'

  async function getRequest() {
    const params = {
      query: 'from:DylanShively6'
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
      throw new Error('Unsuccessful request')
    }
  }

  ;(async () => {
    try {
      // Make request
      const response = await getRequest()
      console.log('success')
      res.status(200).json({ response })
    } catch (e) {
      console.log(e)
    }
  })()
}

// {
//   id: '1462765933856972803',
//   text: 'Happy! My #hopper just sold #MANA with 7.26% profit on #kucoin! To the moon! #cryptohopper'
// },
