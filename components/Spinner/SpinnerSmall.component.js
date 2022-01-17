import styles from './SpinnerSmall.module.scss'
export default function SpinnerSmall() {
  return (
    <div className={styles['lds-ellipsis']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
