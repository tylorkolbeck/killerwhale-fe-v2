import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import Link from '../../components/Link/Link.component'
import Image from 'next/image'
import clsx from 'clsx'
import Hamburger from '../../components/Hamburger/Hamburger.component'
import MobileMenu from '../../components/MobileMenu/MobileMenu.component'

export default function Navbar({ strategies }) {
  function filterProducts(filter) {
    if (strategies) {
      return strategies.filter((strat) => strat.type === filter)
    } else {
      return []
    }
  }

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  useEffect(() => {
    const bodyEl = document.querySelector('body')

    if (bodyEl) {
      if (hamburgerOpen) {
        bodyEl.style.overflow = 'hidden'
      } else {
        bodyEl.style.overflow = 'auto'
      }
    }
  }, [hamburgerOpen])

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

        <div className={styles.hamburger} onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>

        <ul className={clsx(styles.navLinks)}>
          <li>
            <Link
              linkTo='/strategies-signals'
              type='nav'
              subLinks={
                <>
                  <div className={clsx(styles.subLinks)}>
                    <ul>
                      <li>
                        <b className='fs-400'>Strategies</b>
                      </li>
                      <li>
                        <Link
                          linkTo='/strategies-signals'
                          className='button primary'
                          fullWidth
                        >
                          <b>View All</b>
                        </Link>
                      </li>
                      {strategies &&
                        filterProducts('strategy').map((strat) => (
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
                          linkTo='/strategies-signals'
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
            <Link linkTo='/services' type='nav'>
              Services
            </Link>
          </li>
          <li>
            <Link linkTo='/support' type='nav'>
              OnBoarding & Support
            </Link>
          </li>

          <li>
            <Link linkTo='/articles' type='nav'>
              Education
            </Link>
          </li>
          <li>
            <Link linkTo='/about' type='nav'>
              About
            </Link>
          </li>
        </ul>
      </div>

      <MobileMenu shown={hamburgerOpen} toggleShown={toggleHamburger} />
    </nav>
  )
}
