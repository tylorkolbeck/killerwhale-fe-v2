import styles from './Divider.module.scss'

export default function Divider({ width }) {
  console.log(width)
  return <div className={styles.divider} style={{ width }}></div>
}
