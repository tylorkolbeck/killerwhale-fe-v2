import styles from './Navbar.module.scss'
import Link from '../../components/Link/Link.component'
import Image from 'next/image'
import clsx from 'clsx'
import { strategies } from '../../data/strategies'
import Hamburger from '../../components/Hamburger/Hamburger.component'
import { useState } from 'react'

export default function Navbar() {
  function filterProducts(filter) {
    return strategies.filter((strat) => strat.type === filter)
  }

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
    console.log('[Nav] hamburger: ', hamburgerOpen)
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

        <div className='hamburger' onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
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
                          linkTo='/strategies-signals'
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
            <Link linkTo='/support' type='nav'>
              OnBoarding & Support
            </Link>
          </li>

          <li>
            <Link linkTo='/articles' type='nav'>
              News
            </Link>
          </li>
          <li>
            <Link linkTo='/about' type='nav'>
              About
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .hamburger {
          display: none;
          z-index: 6;
        }
        
        @media (max-width: 960px) {
          .hamburger {
            display: block;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }
        }
      `}</style>
    </nav>
  )
}
