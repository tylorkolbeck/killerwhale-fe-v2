import { useState } from 'react'
import styles from './Link.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FaChevronDown } from 'react-icons/fa'
import useOnclickOutside from 'react-cool-onclickoutside'

export default function CustomLink({
  type,
  subLinks,
  iconStart,
  iconEnd,
  linkTo,
  children,
  active,
  className,
  noStyle,
  newTab
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const navClasses = `fs-200 uppercase ff-serif letter-spacing-2 ${active}`

  const closeMenu = () => setDropdownVisible(false)
  const ref = useOnclickOutside(() => closeMenu())
  const handleClickBtn = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const linkClasses = [
    type ? styles[type] : styles.link,
    type === 'nav' || type === 'navSub' ? navClasses : '',
    active ? styles.active : '',
    noStyle ? styles.noStyle : ''
  ].join(' ')

  if (subLinks) {
    return (
      <div ref={ref}>
        <div onClick={handleClickBtn} className={styles.dropdownWrapper}>
          <p className={[styles.nav, navClasses].join(' ')}>
            {children}
            <span className={styles.iconEnd}>
              {/* <FontAwesomeIcon icon={faChevronDown} width="25" height="25" /> */}
              <FaChevronDown />
            </span>
          </p>
          {dropdownVisible && (
            <div onClick={closeMenu} className={styles.subLinks}>
              {subLinks}
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <Link href={linkTo} passHref>
        <a className={linkClasses} target={newTab ? '_blank' : '_self'}>
          {children}{' '}
          {iconEnd && <span className={styles.iconEnd}>{iconEnd}</span>}
        </a>
      </Link>
    )
  }
}
