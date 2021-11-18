import clsx from 'clsx'
import styles from './ProductCard.module.scss'
import Image from 'next/image'

export default function ProductCard({
  name,
  type,
  tradeDuration,
  tradeFreq,
  newLevel,
  experiencedLevel,
  whaleLevel
}) {
  return (
    <div className={styles.productCard}>
      <div className={clsx(styles.badges)}>
        <div style={{ display: newLevel ? 'none' : 'block' }}>
          <Image
            src='/images/badges/badge_dolphin.png'
            height='30'
            width='30'
            alt='Dolphin'
          />
        </div>
        <div style={{ display: experiencedLevel ? 'none' : 'block' }}>
          <Image
            src='/images/badges/badge_fish.png'
            height='30'
            width='30'
            alt='Fish'
          />
        </div>
        <div style={{ display: whaleLevel ? 'none' : 'block' }}>
          <Image
            src='/images/badges/badge_whale.png'
            height='30'
            width='30'
            alt='Whale'
          />
        </div>
      </div>
      <div className={styles.header}>
        <Image
          src='/images/kw_logo_accent.png'
          width='50'
          height='35'
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
            <div
              className={styles.progressBar}
              style={{
                width:
                  tradeDuration === 0
                    ? tradeDuration + 20 + '%'
                    : tradeDuration + '%'
              }}
            ></div>
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
            <div
              className={styles.progressBar}
              style={{
                width: tradeFreq === 0 ? tradeFreq + 20 + '%' : tradeFreq + '%'
              }}
            ></div>
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
