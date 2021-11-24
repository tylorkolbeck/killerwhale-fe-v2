import styles from './Bio.module.scss'
import clsx from 'clsx'

export default function Bio({ bio, shown, ...props }) {
  return (
    <div className={clsx(styles.Bio)} key={bio.id} {...props}>
      <div className={clsx(styles.BioCard)}>
        <div className={clsx(styles.imgWrapper)}>
          <img src='/images/profile_stock.jpeg' alt='Some Person' />
        </div>
        <div className={styles.Bio_img_footer}>
          <p>{bio.name}</p>
          <p>{bio.title}</p>
        </div>
      </div>

      {shown && (
        <div className={styles.bioDetails}>
          <div className={styles.bioDetailsWrapper}>
            <div className={styles.bioDetails_info}>
              <h3>{bio.name}</h3>
              <h4>{bio.title}</h4>
            </div>
            <div>
              <p>{bio.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
