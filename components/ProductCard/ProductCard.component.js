import clsx from 'clsx'
import styles from './ProductCard.module.scss'
import Image from 'next/image'

export default function ProductCard({ name, type, tradeDuration, tradeFreq }) {
  return (
    <div className={styles.productCard}>
      <div
        className={clsx(
          styles.logoName,

          'fs-400 letter-spacing-2'
        )}
      >
        KILLERWHALE
      </div>
      <div className={styles.header}>
        <Image
          src='/images/kw_logo_accent.svg'
          width='50'
          height='50'
          alt='Killer Whale Logo'
        />
      </div>

      <div className={styles.title}>
        <h4 className='fs-600 uppercase ff-good'>{name}</h4>
        <p className='fs-300 uppercase ff-serif letter-spacing-3 text-green'>
          {type}
        </p>
      </div>

      <div className={clsx(styles.stats)}>
        <div className={styles.statBox}>
          <p className={clsx('fs-200 ff-serif uppercase')}>Trade Duration</p>
          <div className={clsx(styles.bar)}>
            {tradeDuration > 0 && (
              <div
                className={styles.progressBar}
                style={{ width: tradeDuration + '%' }}
              ></div>
            )}
          </div>
          <div className={clsx(styles.barLabels, 'fs-200')}>
            <p className='fs-100 uppercase'>low</p>
            <p className='fs-100 uppercase'>avg</p>
            <p className='fs-100 uppercase'>high</p>
          </div>
        </div>
        <div className={styles.statBox}>
          <p className={clsx('fs-200 ff-serif uppercase')}>Trade Frequency</p>
          <div className={clsx(styles.bar)}>
            {tradeFreq > 0 && (
              <div
                className={styles.progressBar}
                style={{ width: tradeFreq + '%' }}
              ></div>
            )}
          </div>
          <div className={clsx(styles.barLabels, 'fs-200')}>
            <p className='fs-100 uppercase'>low</p>
            <p className='fs-100 uppercase'>avg</p>
            <p className='fs-100 uppercase'>high</p>
          </div>
        </div>
      </div>
    </div>
  )
}
