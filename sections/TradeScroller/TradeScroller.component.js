import styles from './TradeScroller.module.scss'
import Marquee from 'react-fast-marquee'

export default function TradeScroller() {
  return (
    <div className={styles.tradeScroller}>
      <Marquee gradient={false}>
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
