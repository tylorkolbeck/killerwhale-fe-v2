import styles from './Navbar.module.scss'
import Link from '../../components/Link/Link.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
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
            linkTo='/'
            type='nav'
            subLinks={
              <ul>
                <li>Link1</li>
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
    </nav>
  )
}
