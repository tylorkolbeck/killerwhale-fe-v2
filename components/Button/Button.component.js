import styles from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Button({
  type,
  children,
  onClick,
  iconStart,
  iconEnd,
  fullWidth
}) {
  const typeStyle = type ? styles[type] : styles.contained

  const classes = [typeStyle, styles.button, fullWidth ? styles.fullWidth : '']
  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {iconStart && iconStart} {children} {iconEnd && iconEnd}{' '}
      {type === 'cta' && (
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      )}
    </button>
  )
}
