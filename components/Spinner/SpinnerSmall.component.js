import styles from './SpinnerSmall.module.scss'

export default function SpinnerSmall() {
  return (
    <div class={styles['lds-ellipsis']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
