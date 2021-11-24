import styles from './TradeScroller.module.scss'
import Marquee from 'react-fast-marquee'
import useSWR from 'swr'
import React from 'react'

export default function TradeScroller() {
  const tweetFetcher = (url) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR('/api/twitter-feed', tweetFetcher)

  function formatTweet(text, id) {
    let stringArray = text.split(' ')
    let profitIndex = stringArray.findIndex((string) => {
      return string.includes('%')
    })

    let profitStringIndex = profitIndex + 1

    return (
      <React.Fragment key={id}>
        <p>
          {stringArray.map((string, index) => {
            if (index === profitIndex || index === profitStringIndex) {
              return <span className='text-green'>{string + ' '}</span>
            } else {
              return string + ' '
            }
          })}
        </p>
        <span style={{ margin: '0 1.5rem' }}>|</span>
      </React.Fragment>
    )
  }

  if (error) return
  if (!data || data.tweets.length === 0)
    return <div className={styles.loading}>Loading twitter feed. . .</div>

  return (
    <div className={styles.tradeScroller}>
      <Marquee gradient={false}>
        {data.tweets.map(({ text, id }) => formatTweet(text, id))}
      </Marquee>
    </div>
  )
}
