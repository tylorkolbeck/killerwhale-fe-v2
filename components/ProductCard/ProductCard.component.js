import clsx from 'clsx'
import styles from './ProductCard.module.scss'
import Image from 'next/image'

export default function ProductCard({
  name,
  type,
  tradeDuration,
  tradeFreq,
  experience,
  mini
}) {
  const experienceBadges = {
    fish: (
      <Image
        src='/images/badges/badge_fish.svg'
        height='30'
        width='30'
        key={'fish'}
      />
    ),
    dolphin: (
      <Image
        src='/images/badges/badge_dolphin.svg'
        height='30'
        width='30'
        key={'dolphin'}
      />
    ),
    whale: (
      <Image
        src='/images/badges/badge_whale.svg'
        height='30'
        width='30'
        key={'whale'}
      />
    )
  }
  return (
    <div className={styles.productCard}>
      <div className={clsx(styles.badges)}>
        {experience && experience.map((e) => experienceBadges[e])}
      </div>
      {!mini && (
        <div className={styles.header}>
          <Image
            src='/images/kw_logo_accent.svg'
            width='50'
            height='50'
            alt='Killer Whale Logo'
          />
        </div>
      )}

      <div className={clsx(styles.title, { [styles.mini]: mini })}>
        <h4
          className={clsx('uppercase ff-good', {
            'fs-600': !mini,
            'fs-500': mini
          })}
        >
          {name}
        </h4>
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
