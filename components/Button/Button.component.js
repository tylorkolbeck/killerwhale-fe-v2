import styles from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

export default function Button({
  type,
  children,
  onClick,
  iconStart,
  iconEnd,
  fullWidth
}) {
  const typeStyle = type ? styles[type] : styles.contained

  return (
    <button
      className={clsx(
        typeStyle,
        styles.button,
        { [styles.fullWidth]: fullWidth },
        'letter-spacing-3'
      )}
      onClick={onClick}
    >
      {iconStart && iconStart} {children} {iconEnd && iconEnd}{' '}
      {type === 'cta' && (
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      )}
    </button>
  )
}
