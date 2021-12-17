import clsx from 'clsx'
import styles from './List.module.scss'

export default function List({ items }) {
  return (
    <ul className={clsx(styles.ulList, 'fs-400')}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
