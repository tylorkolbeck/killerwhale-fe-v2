import styles from './Bio.module.scss'
import clsx from 'clsx'

export default function Bio({ bio, shown, img, ...props }) {
  return (
    <div className={clsx({ [styles.shown]: shown })}>
      <div className={clsx(styles.Bio)} key={bio.id} {...props}>
        <div className={clsx(styles.BioCard)}>
          <div className={clsx(styles.imgWrapper)}>
            <div className={clsx(styles.imgOverlay)}>
              <img src={bio.img} alt='Some Person' />
            </div>
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
