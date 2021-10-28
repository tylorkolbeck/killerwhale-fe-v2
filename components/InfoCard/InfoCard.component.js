import styles from './InfoCard.module.scss'

export default function InfoCard({ children }) {
  return <div className={styles.infoCard}>{children}</div>
}
