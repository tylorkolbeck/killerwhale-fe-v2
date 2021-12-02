import styles from './Navbar.module.scss'
import Link from '../../components/Link/Link.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import clsx from 'clsx'

export default function Navbar() {
  return (
    <nav className={clsx(styles.navBar)}>
      <div className={styles.navbarContent}>
        <div className={styles.logoContainer}>
          <Link linkTo='/'>
            <Image
              src='/images/kw_logo_accent.svg'
              layout='fill'
              alt='Killer Whale Logo'
            />
          </Link>
        </div>

        <div className={styles.hamburger}>
          <FontAwesomeIcon icon={faBars} size='1x' />
        </div>

        <ul className={styles.navLinks}>
          <li>
            <Link
              linkTo='/strategies-signals'
              type='nav'
              subLinks={
                <ul>
                  <li>
                    <Link linkTo='/strategies-signals' type='nav'>
                      All
                    </Link>
                  </li>
                </ul>
              }
            >
              Signals & Strategies
            </Link>
          </li>
          <li>
            <Link linkTo='/' type='nav'>
              KnowledgeBase
            </Link>
          </li>
          <li>
            <Link linkTo='/' type='nav'>
              Education
            </Link>
          </li>
          <li>
            <Link linkTo='/' type='nav'>
              Support
            </Link>
          </li>
          <li>
            <Link
              linkTo='/'
              type='nav'
              subLinks={
                <ul>
                  <li>Link1</li>
                </ul>
              }
            >
              updates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
