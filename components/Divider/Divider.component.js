import styles from './Divider.module.scss'

export default function Divider({ width, color, height }) {
  return (
    <div
      className={styles.divider}
      style={{ width, height, backgroundColor: color }}
    ></div>
  )
}
