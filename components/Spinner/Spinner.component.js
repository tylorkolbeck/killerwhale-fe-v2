import styles from './Spinner.module.scss'

export default function Spinner() {
  return (
    <div className={styles['lds-grid']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
