import styles from './StatsBar.module.scss'
import CountUp from 'react-countup'

export default function StatsBar() {
  const DURATION = 1.5
  return (
    <div className={styles.statsBar}>
      <div>
        <p className={styles.stat}>
          <CountUp end={41} duration={DURATION} separator=',' />
        </p>

        <p className='uppercase fs-300 text-accent'>products</p>
      </div>
      <div>
        <p className={styles.stat}>
          <CountUp end={5817} duration={DURATION} separator=',' />
        </p>
        <p className='uppercase fs-300 text-accent'>Sales</p>
      </div>
      <div>
        <p className={styles.stat}>
          <CountUp end={34226} duration={DURATION} separator=',' />
        </p>
        <p className='uppercase fs-300 text-accent'>Downloads</p>
      </div>
      <div>
        <p className={styles.stat}>
          <CountUp end={1757} duration={DURATION} separator=',' />
        </p>
        <p className='uppercase fs-300 text-accent'>Subscribers</p>
      </div>
    </div>
  )
}
