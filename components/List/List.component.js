import styles from './List.module.scss'

export default function List({ items }) {
  return (
    <ul className={styles.ulList}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
