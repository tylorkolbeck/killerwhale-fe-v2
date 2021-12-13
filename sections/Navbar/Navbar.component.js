import styles from './Navbar.module.scss'
import Link from '../../components/Link/Link.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import clsx from 'clsx'

import Button from '../../components/Button/Button.component'

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
                <>
                  <div className={styles.subLinks}>
                    <ul>
                      {/* <li>
                      <Link linkTo='/strategies-signals' type='nav'>
                        All
                      </Link>
                    </li> */}
                      <li>
                        <b className='fs-400'>Strategies</b>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407777428379-Large-Cap-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          large Cap
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769241499-Gain-ETH-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Gain ETH
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407777426459-Gain-BTC-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Gain BTC
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769238043-Pro-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Pro
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769235739-Breakout-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Breakout
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769233435-DCA-King-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          DCA King
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769231259-Ultimate-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Ultimate
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769229339-Swing-Trade-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Swing Trade
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769225883-Scalp-Trade-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Scalp Trade
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407777420955-Free-Strategy-Setup-Guide'
                          type='nav'
                          newTab
                        >
                          Free Strategy
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='strategies-signals'
                          className='button primary'
                          fullWidth
                        >
                          View All
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <b className='fs-400'>Signals</b>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769245467-Elite-Signals'
                          type='nav'
                          newTab
                        >
                          Elite
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407769243675-Premium-Signals'
                          type='nav'
                          newTab
                        >
                          Premium
                        </Link>
                      </li>

                      <li>
                        <Link
                          linkTo='https://support.killerwhalecrypto.com/hc/en-us/articles/4407777429659-Bank-Robber-Signals'
                          type='nav'
                          newTab
                        >
                          Bank Robber
                        </Link>
                      </li>
                      <li>
                        <Link
                          linkTo='strategies-signals'
                          className='button primary'
                          fullWidth
                        >
                          View All
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              }
            >
              Signals & Strategies
            </Link>
          </li>
          <li>
            <Link linkTo='/' type='nav'>
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
