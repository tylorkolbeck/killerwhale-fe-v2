export default function handler(req, res) {
  // Do the twitter fetching logic
  // return the last 20 posts from @DylanShively6
  const twitterApiKey = process.env.TWITTER_API_KEY

  console.log(twitterApiKey)

  res.status(200).json({
    tweets: [
      {
        test: 'test tweet'
      }
    ]
  })
}
