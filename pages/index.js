import React, { useState, useEffect, useCallback } from 'react'
import styles from '../styles/pages/home.module.scss'
import Head from 'next/head'
import HomepageHero from '../sections/HomepageHero/HomepageHero.component'
import TradeScroller from '../sections/TradeScroller/TradeScroller.component'
import List from '../components/List/List.component'
import Link from '../components/Link/Link.component'
import Image from 'next/image'
import clsx from 'clsx'
import Button from '../components/Button/Button.component'
import ProductCard from '../components/ProductCard/ProductCard.component'
import Testimonial from '../components/Testimonial/Testimonial.component'
import NewsLetterSignup from '../sections/NewsLetterSignup/NewsLetterSignup.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import InfoBar from '../components/InfoBar/InfoBar.component'
import SectionHeader from '../components/SectionHeader/SectionHeader.component'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton
} from '../components/CarouselButtons/CarouselButtons.component'

export default function Home() {
  // Testimonial carousel helper functions start
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])
  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])
  // Testimonial carousel helper functions end

  let testimonialArray = [
    {
      description:
        'Testimonial goes here. Only four days trading with KW. My profits have significantly increased. Couldn’t be happier.',
      strategy: 'Gain BTC',
      startBal: '$2,000 USD',
      profit: '$2,000 USD (100%)',
      name: 'Fred Durst',
      prodName: 'GAIN BTC ',
      type: 'strategy',
      tradeDuration: 0,
      tradeFreq: 50
    },
    {
      description:
        'Testimonial goes here. Only four days trading with KW. My profits have significantly increased. Couldn’t be happier.',
      strategy: 'Gain BTC',
      startBal: '$2,000 USD',
      profit: '$2,000 USD (100%)',
      name: 'Fred Durst',
      prodName: 'GAIN BTC ',
      type: 'strategy',
      tradeDuration: 0,
      tradeFreq: 50
    },
    {
      description:
        'Testimonial goes here. Only four days trading with KW. My profits have significantly increased. Couldn’t be happier.',
      strategy: 'Gain BTC',
      startBal: '$2,000 USD',
      profit: '$2,000 USD (100%)',
      name: 'Fred Durst',
      prodName: 'GAIN BTC ',
      type: 'strategy',
      tradeDuration: 0,
      tradeFreq: 50
    }
  ]

  return (
    <div>
      <Head>
        <title>Killer Whale Crypto</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomepageHero bgImage='/images/background_2_ov.png' />
      <TradeScroller />

      <section className='section bg-light'>
        <div className={clsx('container', styles.twoColumn)}>
          <div className={clsx('flow', styles.cLeft)}>
            <SectionHeader
              header='Why Killer Whale Crypto'
              subText='Take the emotion out of your trading and maximize your profits,
              with our automated strategies, hand picked premium and elite
              signals, sent via our experienced traders.'
              hSize='l'
            />
            <List
              items={[
                'All Skill Levels',
                'Trade While You Sleep',
                'Advanced AI',
                'Large Community'
              ]}
            ></List>

            <Button type='cta'>About Us</Button>
          </div>
          <div className={styles.cRight}>
            <img src='/images/dashboard.png' />
          </div>

          <div className={clsx(styles.cRight, 'v-align-c')}>
            {/* <List
              items={[
                'All Skill Levels',
                'Trade While You Sleep',
                'Advanced AI',
                'Large Community'
              ]}
            ></List> */}
          </div>
        </div>
      </section>
      <section>
        <div
          className={clsx(styles.infoContainer, 'container')}
          style={{ position: 'relative' }}
        >
          <div>
            <Image src='/images/gas.png' width='100' height='100'></Image>
            <h4 className='fs-500 fw-bold'>All Skill Levels</h4>
            <p>
              Killer Whale Signals and strategies have been designed for all
              levels of traders, if you’re new to Crypto or an experienced
              HODL’R we have strategies and signals for every experience level.{' '}
            </p>
          </div>
          <div>
            <Image src='/images/sleeping.png' width='100' height='100'></Image>

            <h4 className='fs-500 fw-bold'>Trade While You Sleep</h4>
            <p>
              Never miss a dip in the market, a pump, or an all time high.
              Killer Whale monitors all of your favorite currencies 24/7. Our
              Advanced AI picks the right time to buy and sell to ensure the
              best return aligned to your investment strategy, without the need
              to worry about the next bear or bull market.
            </p>
          </div>
          <div>
            <Image src='/images/ai.png' width='100' height='100'></Image>

            <h4 className='fs-500 fw-bold'>Advanced AI</h4>
            <p>
              Our Team of experienced traders use advanced AI to watch the
              market and then executing with precision the best trades on up to
              75 different coins, giving our users the best exposure to multiple
              cryptocurrencies whilst ensuring the best returns possible. Join
              our pod and swim with the whales.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className='section bg-light'>
        <div className='container center flow' style={{ maxWidth: '600px' }}>
          <SectionHeader
            header='What Type Of Trader are you?'
            // subText=' Not sure where to get started? Don’t worry, we have you covered. We
            // have strategies and templates picked out to best match your trading
            // style.'
            center
          />
        </div>

        <div className='container grid center'>
          <div className={styles.experienceLevels}>
            <div className='flow'>
              <div>
                <Image
                  src='/images/badges/badge_fish.svg'
                  height='100'
                  width='100'
                  layout='fixed'
                  alt='Fish Badge'
                />
              </div>
              <h5 className='fs-400 fw-bold uppercase'>New To Trading</h5>
              <p className='text-accent'>
                Your first step to gain access to our top rated strategies. Your
                first step to gain access to our top rated strategies.
              </p>
              <div>
                <Link
                  linkTo='/'
                  iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className='flow'>
              <Image
                src='/images/badges/badge_dolphin.svg'
                height='100'
                width='100'
                layout='fixed'
                alt='Dolphin Badge'
              />
              <h5 className='fs-400 fw-bold uppercase'>Experienced</h5>
              <p className='text-accent'>
                Your first step to gain access to our top rated strategies. Your
                first step to gain access to our top rated strategies.
              </p>
              <div>
                <Link
                  linkTo='/'
                  iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className='flow'>
              <Image
                src='/images/badges/badge_whale.svg'
                height='100'
                width='100'
                layout='fixed'
                alt='Whale Badge'
              />
              <h5 className='fs-400 fw-bold uppercase'>Killer Whale</h5>
              <p className='text-accent'>
                Your first step to gain access to our top rated strategies. Your
                first step to gain access to our top rated strategies.
              </p>
              <div>
                <Link
                  linkTo='/'
                  iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoBar
        text='Are you ready to join the Killer Whale Pod?'
        button={
          <Button type='ctaInverted' inverted>
            Getting Started
          </Button>
        }
      />

      <section className='section bg-dark'>
        <div className={clsx('container', styles.twoColumn)}>
          <div className={clsx('flow', styles.cLeft)}>
            <SectionHeader
              header='Our Hand Picked Strategies & Signals'
              subText=' Never miss a dip in the market, a pump, or an all time high.
              Killer Whale monitors all of your favorite currencies 24/7. Our'
            />

            <Button type='cta'>View All Products</Button>
          </div>

          <div className={clsx(styles.productCards, styles.cRight)}>
            <Link linkTo={`/product/gain-btc`} type='nav'>
              <ProductCard
                name='GAIN BTC '
                type='strategy'
                tradeDuration={0}
                tradeFreq={50}
                experience={[1, 2, 3]}
              />
            </Link>
            <Link linkTo={`/product/gain-btc`} type='nav'>
              <ProductCard
                name='GAIN BTC'
                type='strategy'
                tradeDuration={100}
                tradeFreq={100}
                experience={[1, 2, 3]}
              />
            </Link>
            <Link linkTo={`/product/gain-btc`} type='nav'>
              <ProductCard
                name='GAIN BTC '
                type='strategy'
                tradeDuration={0}
                tradeFreq={50}
                experience={[1, 2, 3]}
              />
            </Link>
            <Link linkTo={`/product/gain-btc`} type='nav'>
              <ProductCard
                name='GAIN BTC '
                type='strategy'
                tradeDuration={0}
                tradeFreq={50}
                experience={[1, 2, 3]}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className='section bg-light'>
        <div className={clsx('container', styles.twoColumn)}>
          <div className={clsx('flow', styles.cLeft)}>
            <SectionHeader
              header='Killer Whale Pod Results'
              subText='These results are taken live from CryptoHopper, and showcase trade
              profitability of Killer Whale Strategies & Signals. These results
              can be verified in our Discord community'
            />
            {/* <h3
              className={clsx('fs-600 uppercase ff-good', styles.centerOnSmall)}
              style={{ maxWidth: '500px' }}
            >
              Killer Whale Pod Results
            </h3>
            <div className={styles.divider}>
              <Divider width='200px' />
            </div>
            <p className={clsx('text-accent')}>
              These results are taken live from CryptoHopper, and showcase trade
              profitability of Killer Whale Strategies & Signals. These results
              can be verified in our Discord community
            </p> */}
            <Button type='cta'>All Strategies and Signals</Button>
          </div>

          <div
            className={clsx(
              styles.cRight,
              styles.testimonialWrappper,
              'bg-dark'
            )}
            style={{
              padding: '2rem',
              borderRadius: 6
            }}
          >
            {/* Testimonial Carousel start */}
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={viewportRef}>
                <div className={styles.embla__container}>
                  {testimonialArray.map((testimonial, i) => (
                    <Testimonial
                      key={i}
                      description={testimonial.description}
                      strategy={testimonial.strategy}
                      startBal={testimonial.startBal}
                      profit={testimonial.profit}
                      name={testimonial.name}
                      strategyCard={
                        <ProductCard
                          name={testimonial.prodName}
                          type={testimonial.type}
                          tradeDuration={testimonial.tradeDuration}
                          tradeFreq={testimonial.tradeFreq}
                          experience={[1, 2, 3]}
                        />
                      }
                    />
                  ))}
                </div>
              </div>
              <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
              <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
            {/* Testimonial Carousel start */}
          </div>
        </div>
      </section>

      <section className={clsx('section', 'bg-dark', styles.signUpSection)}>
        <div className='container'>
          <NewsLetterSignup />
        </div>
      </section>
    </div>
  )
}
