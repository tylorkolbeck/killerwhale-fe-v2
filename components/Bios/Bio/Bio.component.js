import styles from './Bio.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

export default function Bio({ bio, shown, img, ...props }) {
  return (
    <div className={clsx({ [styles.shown]: shown })}>
      <div className={clsx(styles.Bio)} key={bio.id} {...props}>
        <div className={clsx(styles.BioCard)}>
          <div className={clsx(styles.imgWrapper)}>
            <div className={clsx(styles.imgOverlay)}>
              <Image
                src={bio.img}
                alt='Some Person'
                height='300px'
                width='300px'
                style={{ maxHeight: '300px' }}
              />
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
