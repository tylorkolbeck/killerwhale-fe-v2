import styles from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FaArrowRight } from 'react-icons/fa'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export default function Button({
  type,
  children,
  onClick,
  iconStart,
  iconEnd,
  fullWidth,
  inverted,
  newTab,
  link
}) {
  const router = useRouter()

  const typeStyle = type ? styles[type] : styles.contained

  const navigate = () => {
    router.push(link)
  }

  function clickHandler(event) {
    if (onClick) onClick(event)
    else if (link) navigate()
  }

  // const clickHandler = onClick ? onClick : navigate

  return (
    <button
      className={clsx(
        typeStyle,
        styles.button,
        { [styles.fullWidth]: fullWidth, inverted: inverted },
        'letter-spacing-3'
      )}
      onClick={clickHandler}
    >
      {iconStart && iconStart} {children} {iconEnd && iconEnd}{' '}
      {(type === 'cta' || type === 'ctaInverted') && (
        <span className={styles.icon}>
          <FaArrowRight style={{ marginBottom: '-3px' }} />
        </span>
      )}
    </button>
  )
}
