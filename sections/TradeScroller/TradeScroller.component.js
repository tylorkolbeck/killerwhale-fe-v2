import styles from './TradeScroller.module.scss'
import Marquee from 'react-fast-marquee'
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

function fetchTwitterFeed() {
  // call api endpoint with fetch
  // /api/twitter-feed
}

export default function TradeScroller() {
  const { data, error } = useSWR('/api/user', fetchTwitterFeed)

  // if (error) return
  // if (!data) return <div>Loading twitter feed</div>

  return (
    <div className={styles.tradeScroller}>
      <Marquee gradient={false}>
        {/* Loop over data */}
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
        <p>
          Signal just sold #XRP with{' '}
          <span className='text-green fs-200'>1.88% profit</span> on #kucoin!
          <span className='text-accent fs-100' style={{ marginLeft: 4 }}>
            3hr
          </span>
        </p>
      </Marquee>
    </div>
  )
}
