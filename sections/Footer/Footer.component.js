import { useEffect } from 'react'
import styles from './Footer.module.scss'
import Link from '../../components/Link/Link.component'
import Image from 'next/image'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faYoutube,
  faDiscord,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import useSWR from 'swr'
import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../utils/media'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { strategies } from '../../data/strategies'

const iconMap = {
  discord: faDiscord,
  youtube: faYoutube,
  twitter: faTwitter,
  facebook: faFacebook,
  instagram: faInstagram
}

const fetcher = (url) => fetchAPI(url).then((res) => res.Links)

export default function Footer({ strategies }) {
  const { data: affiliateLinks, error: affiliateLinksError } = useSWR(
    '/affiliate-links',
    fetcher
  )

  const { data: socialLinks, error: socialLinksEroor } = useSWR(
    '/social-links',
    (url) => fetchAPI(url).then((res) => res?.socialLinks)
  )

  return (
    <div className={clsx(styles.footer)}>
      <div className='container flow'>
        <h4 className={clsx('uppercase ff-good fs-700 mb-4', styles.logoName)}>
          KILLER WHALE
        </h4>
        <div className={styles.linkWrapper}>
          <div className={styles.col}>
            <div className={styles.linkCategory}>
              <h3 className='fs-400 ff-serif uppercase'>Strategies</h3>
              {strategies &&
                strategies.map((strat) => {
                  if (strat.type === 'strategy') {
                    return (
                      <Link
                        linkTo={`/product/${strat.slug}`}
                        type='nav'
                        key={`signal_${strat.id}`}
                      >
                        {strat.name}
                      </Link>
                    )
                  }
                })}
            </div>

            <div className={styles.linkCategory}>
              <h3 className='fs-400 ff-serif uppercase'>Signals</h3>
              {strategies &&
                strategies.map((strat) => {
                  if (strat.type === 'signal') {
                    return (
                      <Link
                        linkTo={`/product/${strat.slug}`}
                        type='nav'
                        key={`strat_${strat.id}`}
                      >
                        {strat.name}
                      </Link>
                    )
                  }
                })}
            </div>

            <div className={styles.linkCategory}>
              <h3 className='fs-400 ff-serif uppercase'>Services</h3>
              <Link linkTo='/services?l=1' type='nav'>
                Install
              </Link>
              <Link linkTo='/services?l=2' type='nav'>
                Tune
              </Link>
              <Link linkTo='/services?l=3' type='nav'>
                Consult
              </Link>
            </div>

            <div className={styles.linkCategory}>
              <h3 className='fs-400 ff-serif uppercase'>Links</h3>
              <Link
                linkTo='https://support.killerwhalecrypto.com/hc/en-us'
                type='nav'
              >
                Knowledgebase
              </Link>
              <Link
                linkTo='https://support.killerwhalecrypto.com/hc/en-us/categories/4407769214875-Setup-Guides'
                type='nav'
              >
                Setup Guides
              </Link>
              <Link linkTo='/support' type='nav'>
                Support
              </Link>
              <Link linkTo='/articles' type='nav'>
                News
              </Link>
            </div>

            <div>
              <h3 className='fs-400 ff-serif uppercase'>Legal</h3>
              <div>
                <Link linkTo='/privacy-policy' type='nav'>
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link linkTo='/cookie-policy' type='nav'>
                  Cookie Policy
                </Link>
              </div>
              <div>
                <Link linkTo='/risk-disclosure' type='nav'>
                  Risk Disclosure
                </Link>
              </div>
            </div>
          </div>

          <div className='flow'>
            <h4 className='uppercase fs-500 ff-good'>Our Partners</h4>
            <div className={styles.partnersWrapper}>
              {affiliateLinks &&
                affiliateLinks.map((affiliate) => {
                  return (
                    <a
                      href={affiliate?.link?.url}
                      target='_blank'
                      key={affiliate.id}
                    >
                      <Image
                        src={affiliate?.link?.linkImage[0].url}
                        layout='fixed'
                        height='43'
                        width='141'
                        alt='Kucoin'
                      />
                    </a>
                  )
                })}
            </div>
          </div>
        </div>

        <div className='flow'>
          <h4 className='uppercase fs-500 ff-good'>Follow Us</h4>
          <div className={styles.socialWrapper}>
            {socialLinks &&
              socialLinks.map((social) => {
                return (
                  <div key={social.id}>
                    <p>
                      <FontAwesomeIcon
                        icon={iconMap[social.name.toLowerCase()]}
                      />
                    </p>
                    <Link linkTo={social.link} type='nav' newTab>
                      {social?.name}
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>

        <p className='fs-200 text-accent center'>
          Copyright Killer Whale © 2022
        </p>
      </div>
    </div>
  )
}
