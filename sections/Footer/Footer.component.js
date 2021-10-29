import styles from './Footer.module.scss'
import Link from '../../components/Link/Link.component'
import Image from 'next/image'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className={clsx('section', styles.footer)}>
      <div className='container flow'>
        <h4 className='uppercase ff-good fs-700 mb-2'>KILLER WHALE</h4>
        <div className={styles.linkWrapper}>
          <div className={styles.col}>
            <div className={styles.linkCategory}>
              <h3 className='fs-400 ff-serif uppercase'>Strategies</h3>
              <Link linkTo='/' type='nav'>
                Gain BTC
              </Link>
              <Link linkTo='/' type='nav'>
                Gain ETH
              </Link>
            </div>

            <div className={styles.linkCategory}>
              <h3 className='fs-400 ff-serif uppercase'>Signals</h3>
              <Link linkTo='/' type='nav'>
                Bank Robber
              </Link>
            </div>

            <div className={styles.linkCategory}>
              <h3 className='fs-400 ff-serif uppercase'>Links</h3>
              <Link linkTo='/' type='nav'>
                Knowledgebase
              </Link>
              <Link linkTo='/' type='nav'>
                Education
              </Link>
              <Link linkTo='/' type='nav'>
                Support
              </Link>
              <Link linkTo='/' type='nav'>
                Updates
              </Link>
            </div>

            <div>
              <h3 className='fs-400 ff-serif uppercase'>Legal</h3>
              <Link linkTo='/' type='nav'>
                Privacy Policy
              </Link>
              <Link linkTo='/' type='nav'>
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>

        <div className='flow'>
          <h4 className='uppercase fs-500 ff-good'>Our Partners</h4>
          <div className={styles.partnersWrapper}>
            <Image
              src='/images/partners/partner1.png'
              layout='fixed'
              height='43'
              width='141'
              alt='Kucoin'
            />
            <Image
              src='/images/partners/partner2.png'
              layout='fixed'
              height='43'
              width='141'
              alt='Kucoin'
            />
            <Image
              src='/images/partners/partner3.png'
              layout='fixed'
              height='43'
              width='141'
              alt='Kucoin'
            />
            <Image
              src='/images/partners/partner4.png'
              layout='fixed'
              height='43'
              width='141'
              alt='Kucoin'
            />
            <Image
              src='/images/partners/partner5.png'
              layout='fixed'
              height='43'
              width='141'
              alt='Kucoin'
            />
            <Image
              src='/images/partners/partner6.png'
              layout='fixed'
              height='43'
              width='141'
              alt='Kucoin'
            />
            <Image
              src='/images/partners/partner7.png'
              layout='fixed'
              height='43'
              width='141'
              alt='Kucoin'
            />
          </div>
        </div>

        <div className='flow'>
          <h4 className='uppercase fs-500 ff-good'>Follow Us</h4>
          <div className={styles.socialWrapper}>
            <div>
              <p>
                <FontAwesomeIcon icon={faTwitter} />
              </p>
              <Link linkTo='/' type='nav'>
                Twitter
              </Link>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faFacebook} />
              </p>
              <Link linkTo='/' type='nav'>
                Facebook
              </Link>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faDiscord} />
              </p>
              <Link linkTo='/' type='nav'>
                Discord
              </Link>
            </div>
          </div>
        </div>

        <p className='fs-200 text-accent center'>
          Copyright Killer Whale © 2021
        </p>
      </div>
    </div>
  )
}
