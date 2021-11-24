import styles from './TradeScroller.module.scss'
import Marquee from 'react-fast-marquee'
import useSWR from 'swr'

export default function TradeScroller() {
  const tweetFetcher = (url) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR('/api/twitter-feed', tweetFetcher)

  console.log(data)

  if (error) return
  if (!data)
    return <div className={styles.loading}>Loading twitter feed. . .</div>
  return (
    <div className={styles.tradeScroller}>
      <Marquee gradient={false}>
        <p>{data.tweets.data[0].text}</p>
        <p>{data.tweets.data[1].text}</p>
        <p>{data.tweets.data[2].text}</p>
        <p>{data.tweets.data[3].text}</p>
        <p>{data.tweets.data[4].text}</p>
        <p>{data.tweets.data[5].text}</p>
        <p>{data.tweets.data[6].text}</p>
        <p>{data.tweets.data[7].text}</p>
        <p>{data.tweets.data[8].text}</p>
        <p>{data.tweets.data[9].text}</p>
        <p>{data.tweets.data[10].text}</p>
        <p>{data.tweets.data[11].text}</p>
        <p>{data.tweets.data[12].text}</p>
        <p>{data.tweets.data[13].text}</p>
        <p>{data.tweets.data[14].text}</p>
        <p>{data.tweets.data[15].text}</p>
        <p>{data.tweets.data[16].text}</p>
        <p>{data.tweets.data[17].text}</p>
        <p>{data.tweets.data[18].text}</p>
        <p>{data.tweets.data[19].text}</p>
        {/* <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p> */}
      </Marquee>
    </div>
  )
}
// App rate limit: 450 requests per 15-minute window shared among all users of your app
