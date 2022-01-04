import styles from './StatsBar.module.scss'
import CountUp from 'react-countup'

export default function StatsBar({ salesAndDownloads }) {
  const DURATION = 1.5
  return (
    <div className={styles.statsBar}>
      <div>
        <p className={styles.stat}>
          <CountUp
            end={salesAndDownloads?.products}
            duration={DURATION}
            separator=','
          />
        </p>

        <p className='uppercase fs-300 text-accent'>products</p>
      </div>
      <div>
        <p className={styles.stat}>
          <CountUp
            end={salesAndDownloads?.sales}
            duration={DURATION}
            separator=','
          />
        </p>
        <p className='uppercase fs-300 text-accent'>Sales</p>
      </div>
      <div>
        <p className={styles.stat}>
          <CountUp
            end={salesAndDownloads?.downloads}
            duration={DURATION}
            separator=','
          />
        </p>
        <p className='uppercase fs-300 text-accent'>Downloads</p>
      </div>
      <div>
        <p className={styles.stat}>
          <CountUp
            end={salesAndDownloads?.subscribers}
            duration={DURATION}
            separator=','
          />
        </p>
        <p className='uppercase fs-300 text-accent'>Subscribers</p>
      </div>
    </div>
  )
}
