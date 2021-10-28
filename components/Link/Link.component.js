import { useState } from 'react'
import styles from './Link.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function CustomLink({
  type,
  subLinks,
  iconStart,
  iconEnd,
  linkTo,
  children,
  active
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const navClasses = `fs-200 uppercase ff-serif letter-spacing-2 ${active}`

  const linkClasses = [
    type ? styles[type] : styles.link,
    type === 'nav' || type === 'navSub' ? navClasses : '',
    active ? styles.active : ''
  ].join(' ')

  if (subLinks) {
    return (
      <div>
        <div
          onClick={() => setDropdownVisible(!dropdownVisible)}
          className={styles.dropdownWrapper}
        >
          <p className={[styles.nav, navClasses].join(' ')}>
            {children}
            <span className={styles.iconEnd}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </p>
          {dropdownVisible && <div className={styles.subLinks}>{subLinks}</div>}
        </div>
      </div>
    )
  } else {
    return (
      <Link href={linkTo} passHref>
        <a className={linkClasses}>
          {children}{' '}
          {iconEnd && <span className={styles.iconEnd}>{iconEnd}</span>}
        </a>
      </Link>
    )
  }
}
