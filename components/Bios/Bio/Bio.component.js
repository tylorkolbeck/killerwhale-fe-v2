import styles from './Bio.module.scss'
import clsx from 'clsx'

export default function Bio({ bio, shown, ...props }) {
  console.log('>>>', shown)
  return (
    <div className={clsx({ [styles.shown]: shown })}>
      <div className={clsx(styles.Bio)} key={bio.id} {...props}>
        <div className={clsx(styles.BioCard)}>
          <div className={clsx(styles.imgWrapper)}>
            <img src='/images/profile_stock.jpeg' alt='Some Person' />
          </div>
          <div className={styles.Bio_img_footer}>
            <p className='ff-good fs-300'>{bio.name}</p>
            <p className='fs-200 text-accent'>{bio.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
