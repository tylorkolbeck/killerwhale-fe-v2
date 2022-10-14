import styles from './TradeScroller.module.scss'
import Marquee from 'react-fast-marquee'
import useSWR from 'swr'
import React from 'react'

export default function TradeScroller() {
  const tweetFetcher = (url) => fetch(url).then((r) => r.json())

  const { data, error } = useSWR('/api/twitter-feed', tweetFetcher)
  console.log('>>>', data)

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
              return (
                <span className='text-green' key={`profit_${index}`}>
                  {string + ' '}
                </span>
              )
            } else {
              return string + ' '
            }
          })}
        </p>
        <span className={styles.tweetDivider}>|</span>
      </React.Fragment>
    )
  }
  if (error) return
  if (!data || data?.tweets?.length === 0)
    return <div className={styles.loading}>Loading twitter feed. . .</div>
  return (
    <div>
      {data?.tweets ? (
        <div className={styles.tradeScroller}>
          <a
            href='https://twitter.com/DylanShively6?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
            target='_blank'
            rel='noreferrer'
            className={styles.link}
          >
            <Marquee gradient={false} speed={30}>
              {data?.tweets?.map(({ text, id }) => formatTweet(text, id))}
            </Marquee>
          </a>
        </div>
      ) : null}
    </div>
  )
}
