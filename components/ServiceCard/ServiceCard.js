import clsx from 'clsx'
import styles from './ServiceCard.module.scss'
import Image from 'next/image'

export default function ProductCard({ name, type, price, mini, id }) {
  const serviceImages = [
    '/images/services/tuneup_green.svg',
    '/images/services/config_blue.svg',
    '/images/services/one_on_one.svg'
  ]

  return (
    <div className={styles.productCard}>
      <div className={clsx(styles.badges)}>
        <Image
          src={serviceImages[id - 1]}
          height='50'
          width='50'
          key={'fish'}
          alt='fish'
        />
      </div>
      {
        <div className={styles.header}>
          <Image
            src='/images/kw_logo_accent.svg'
            width='50'
            height='50'
            alt='Killer Whale Logo'
          />
        </div>
      }

      <div className={clsx(styles.title, { [styles.mini]: mini })}>
        <h4 className={clsx('uppercase ff-good fs-500')}>{name}</h4>
        <p className='fs-300 uppercase ff-serif letter-spacing-3 text-green bold'>
          {price}
        </p>
      </div>

      <div className={clsx(styles.stats)}></div>
    </div>
  )
}
