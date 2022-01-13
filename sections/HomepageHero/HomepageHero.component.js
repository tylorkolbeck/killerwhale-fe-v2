import Divider from '../../components/Divider/Divider.component'
import styles from './HomepageHero.module.scss'
import Button from '../../components/Button/Button.component'
import InfoCard from '../../components/InfoCard/InfoCard.component'
import Link from '../../components/Link/Link.component'
import StatsBar from '../../components/StatsBar/StatsBar.component'
import { FaArrowRight } from 'react-icons/fa'
import clsx from 'clsx'
import Image from 'next/image'

export default function Hero({ bgImage, salesAndDownloads }) {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${bgImage})` }}>
      <section className={clsx(styles.heroSection, 'container')}>
        <div className={clsx(styles.heroText, 'flow')}>
          <h1 className={clsx('fs-400 uppercase ff-good')}>
            Killer Whale Crypto
          </h1>
          <h2 className={clsx('fs-600 uppercase ff-good')}>
            Change The Way <span className='text-green'>You Trade</span>
          </h2>
          <div className={styles.divider}>
            <Divider width='clamp(80px, 40vw, 200px)' />
          </div>
          <p className={clsx('text-accent')}>
            Get started with the #1 scalp and trading bots on Cryptohopper
          </p>

          <Button type='cta' link='/strategies-signals'>
            Get Started
          </Button>
        </div>

        <div className={styles.infoCardWrapper}>
          <InfoCard>
            <Image
              layout='fixed'
              src='/images/trophy.svg'
              alt='Award'
              height='37px'
              width='37px'
            />
            <div className='grid'>
              <p>#1 Rated Seller on Cryptohopper </p>
              <span className='fs-200'>
                <Link
                  linkTo='https://www.cryptohopper.com/marketplace/search?q=killer+whale'
                  iconEnd={<FaArrowRight style={{marginBottom: "-3px"}}/>}
                >
                  View Marketplace
                </Link>
                <link></link>
              </span>
            </div>
          </InfoCard>
          <InfoCard>
            <Image
              layout='fixed'
              src='/images/news.svg'
              alt='Newspaper'
              height='37px'
              width='37px'
            />
            <div className='grid'>
              <p>Daily news from the Killer Whale Experts</p>
              <span className='fs-200'>
                <Link
                  linkTo='/articles'
                  iconEnd={<FaArrowRight style={{marginBottom: "-3px"}}/>}
                >
                  News & Articles
                </Link>
              </span>
            </div>
          </InfoCard>
          <InfoCard>
            <Image
              layout='fixed'
              src='/images/chat.svg'
              alt='Chat'
              height='37px'
              width='37px'
            />

            <div className='grid'>
              <p>Join the Global Killer Whale Community</p>
              <span className='fs-200'>
                <Link
                  linkTo='https://discord.gg/UNXZhFVnrA'
                  iconEnd={<FaArrowRight style={{marginBottom: "-3px"}}/>}
                  newTab
                >
                  Visit Discord
                </Link>
              </span>
            </div>
          </InfoCard>
        </div>
      </section>
      <div
        style={{
          position: 'relative',
          bottom: 0
        }}
      >
        <StatsBar salesAndDownloads={salesAndDownloads} />
      </div>
    </div>
  )
}
