import styles from './Navbar.module.scss'
import Link from '../../components/Link/Link.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import clsx from 'clsx'
import { strategies } from '../../data/strategies'

import Button from '../../components/Button/Button.component'

export default function Navbar() {
  function filterProducts(filter) {
    return strategies.filter((strat) => strat.type === filter)
  }

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
                <>
                  <div className={styles.subLinks}>
                    <ul>
                      <li>
                        <b className='fs-400'>Strategies</b>
                      </li>
                      <li>
                        <Link
                          linkTo='strategies-signals'
                          className='button primary'
                          fullWidth
                        >
                          <b>View All</b>
                        </Link>
                      </li>
                      {filterProducts('strategy').map((strat) => (
                        <li key={strat.id}>
                          <Link linkTo={`/product/${strat.slug}`} type='nav'>
                            {strat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul>
                      <li>
                        <b className='fs-400'>Signals</b>
                      </li>
                      <li>
                        <Link
                          linkTo='strategies-signals'
                          className='button primary'
                          fullWidth
                        >
                          <b>View All</b>
                        </Link>
                      </li>
                      {filterProducts('signal').map((strat) => (
                        <li key={strat.id}>
                          <Link linkTo={`/product/${strat.slug}`} type='nav'>
                            {strat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              }
            >
              Signals & Strategies
            </Link>
          </li>
          <li>
            <Link linkTo='/support' type='nav'>
              OnBoarding & Support
            </Link>
          </li>

          <li>
            <Link linkTo='/' type='nav'>
              Articles
            </Link>
          </li>
          <li>
            <Link linkTo='/about' type='nav'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
