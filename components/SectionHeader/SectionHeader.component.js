import styles from './SectionHeader.module.scss'
import Divider from '../Divider/Divider.component'
import clsx from 'clsx'

export default function SectionHeader({
  header,
  subText,
  center,
  children,
  hSize
}) {
  const sizes = {
    s: 'fs-500',
    m: 'fs-600',
    l: 'fs-600',
    xl: 'fs-700'
  }

  const headerSize = hSize ? sizes[hSize] : sizes['l']

  return (
    <div
      className={clsx('flow', styles.SectionHeader, {
        [styles.center]: center
      })}
    >
      <h3 className={clsx('uppercase ff-good', styles.header, headerSize)}>
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
