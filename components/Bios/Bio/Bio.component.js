import styles from './Bio.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { getStrapiMedia } from '../../../utils/media'

export default function Bio({ bio, shown, img, ...props }) {
  return (
    <div className={clsx({ [styles.shown]: shown })}>
      <div className={clsx(styles.Bio)} key={bio.id} {...props}>
        <div className={clsx(styles.BioCard)}>
          <div className={clsx(styles.imgWrapper)}>
            <div className={clsx(styles.imgOverlay)}>
              <Image
                src={getStrapiMedia(bio?.profile?.url)}
                alt='Some Person'
                height='300'
                width='300'
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
          <div className={styles.Bio_img_footer}>
            <p className='ff-good fs-300'>{bio.name}</p>
            <p className='fs-200 text-accent'>{bio.title}</p>
            <p className='text-green'>{bio.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
