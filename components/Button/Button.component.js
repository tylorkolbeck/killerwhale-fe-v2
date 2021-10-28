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
  fullWidth,
  inverted
}) {
  const typeStyle = type ? styles[type] : styles.contained

  return (
    <button
      className={clsx(
        typeStyle,
        styles.button,
        { [styles.fullWidth]: fullWidth, inverted: inverted },
        'letter-spacing-3'
      )}
      onClick={onClick}
    >
      {iconStart && iconStart} {children} {iconEnd && iconEnd}{' '}
      {(type === 'cta' || type === 'ctaInverted') && (
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      )}
    </button>
  )
}
