import styles from './SectionHeader.module.scss'
import Divider from '../Divider/Divider.component'
import clsx from 'clsx'

export default function SectionHeader({ header, subText, center, children }) {
  return (
    <div
      className={clsx('flow', styles.SectionHeader, {
        [styles.center]: center
      })}
    >
      <h3 className={clsx('fs-700 uppercase ff-good', styles.header)}>
        {header}
      </h3>
      <div className={styles.divider}>
        <Divider width='200px' />
      </div>
      <p className={clsx('text-accent', styles.subText)}>{subText}</p>
      {children && children}
    </div>
  )
}
