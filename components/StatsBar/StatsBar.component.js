import styles from './StatsBar.module.scss'

export default function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div>
        <p className={styles.stat}>123</p>
        <p className='uppercase fs-300 text-accent'>products</p>
      </div>
      <div>
        <p className={styles.stat}>4,567</p>
        <p className='uppercase fs-300 text-accent'>Sales</p>
      </div>
      <div>
        <p className={styles.stat}>8,901</p>
        <p className='uppercase fs-300 text-accent'>subscribers</p>
      </div>
      <div>
        <p className={styles.stat}>1,200</p>
        <p className='uppercase fs-300 text-accent'>members</p>
      </div>
    </div>
  )
}
