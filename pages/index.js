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
import { FaArrowRight } from 'react-icons/fa'
import InfoBar from '../components/InfoBar/InfoBar.component'
import SectionHeader from '../components/SectionHeader/SectionHeader.component'
import useEmblaCarousel from 'embla-carousel-react'
import { NextSeo } from 'next-seo'

import {
  GiArtificialIntelligence,
  GiNightSleep,
  GiSpeedometer
} from 'react-icons/gi'
import {
  PrevButton,
  NextButton
} from '../components/CarouselButtons/CarouselButtons.component'
import { fetchAPI } from '../lib/api'

export default function Home({ seo, salesAndDownloads }) {
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
        "Experience is great. Premium signals are worth every penny. I also use the AI with multiple strategy's Just let the bot do it's work. Most important is not to sell at a loss. The support on discord is great. The community is very helpfull. ",
      strategy: 'Premium',
      startBal: '$2,775 USD',
      profit: '$2858 (103%)',
      name: 'Gert-Jan',
      prodName: 'Premium ',
      type: 'signal',
      tradeDuration: 80,
      tradeFreq: 25,
      slug: 'premium'
    },
    {
      description:
        'I have found the Killer Whale free strategy to be very good with some minor tweaks after the recommended setup. The discord server has been of much help to see what other people are running to tweak and resolve any issues with my hopper setup.',
      strategy: 'Free',
      startBal: '$1,200 USD',
      profit: '$300 (25%)',
      name: 'DeltaNachos',
      prodName: 'free',
      type: 'strategy',
      tradeDuration: 50,
      tradeFreq: 50,
      slug: 'free'
    },
    {
      description:
        'Used the YouTube video about Killer Whale Premium Signals to setup.',
      strategy: 'Premium',
      startBal: '$250 USD',
      profit: '$625 USD (250%)',
      name: 'Hiena',
      prodName: 'Premium ',
      type: 'signal',
      tradeDuration: 80,
      tradeFreq: 25,
      slug: 'premium'
    },
    {
      description:
        'Used the YouTube video about Killer Whale Premium Signals to setup.',
      strategy: 'Premium',
      startBal: '$5,000 USD',
      profit: '$1,250 USD (25%)',
      name: 'Etienne Ghigo',
      prodName: 'Premium ',
      type: 'signal',
      tradeDuration: 80,
      tradeFreq: 25,
      slug: 'premium'
    }
  ]

  return (
    <div>
      <Head>
        <title>Killer Whale Crypto</title>
        {/* <meta name='description' content='Generated by create next app' /> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo title={seo?.metaTitle} description={seo?.metaDescription} />
      <HomepageHero
        bgImage='/images/background_2_ov.png'
        salesAndDownloads={salesAndDownloads}
      />
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
                'Global Community'
              ]}
            ></List>

            <Button type='cta' link='about'>
              About Us
            </Button>
          </div>
          <div className={styles.cRight}>
            <Image
              src='/images/dashboard.png'
              alt='Dashboard'
              height='353'
              width='604'
            />
          </div>

          <div className={clsx(styles.cRight, 'v-align-c')}></div>
        </div>
      </section>
      <section>
        <div
          className={clsx(styles.infoContainer, 'container')}
          style={{ position: 'relative' }}
        >
          <div>
            {/* <Image src='/images/gas.png' width='100' height='100'></Image> */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <GiSpeedometer size={75} color='rgb(36, 174, 144)' />
            </div>
            <h4 className='fs-500 fw-bold center'>All Skill Levels</h4>
            <p className='text-accent'>
              Killer Whale Signals and strategies have been designed for all
              levels of traders, if you’re new to Crypto or an experienced
              HODL’R we have strategies and signals for every experience level.{' '}
            </p>
          </div>
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <GiNightSleep size={75} color='rgb(36, 174, 144)' />
            </div>

            <h4 className='fs-500 fw-bold center'>Trade While You Sleep</h4>
            <p className='text-accent'>
              Never miss a dip in the market, a pump, or an all time high.
              Killer Whale monitors all of your favorite currencies 24/7. Our
              Advanced AI picks the right time to buy and sell to ensure the
              best return aligned to your investment strategy, without the need
              to worry about the next bear or bull market.
            </p>
          </div>
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <GiArtificialIntelligence size={75} color='rgb(36, 174, 144)' />
            </div>

            <h4 className='fs-500 fw-bold center'>Advanced AI</h4>
            <p className='text-accent'>
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
            <div>
              <Link linkTo='/strategies-signals?l=0'>
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
                    You are new to trading? Don&apos;t worry we&apos;ve got you.
                    Our hand picked strategies and signals are a great way to
                    start, without the need to understand market trends.
                  </p>
                  <div>
                    <Link
                      linkTo='/strategies-signals?l=0'
                      iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link linkTo='/strategies-signals?l=1'>
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
                    You are a Dolphin and know how to swim? Let us make your
                    portfolio work for you. Our strategies and signals will take
                    your trading to the next level, no matter what your
                    investment strategy is.
                  </p>
                  <div>
                    <Link
                      linkTo='/strategies-signals?l=1'
                      iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link linkTo='/strategies-signals?l=2'>
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
                    Consider yourself a Killer Whale? Welcome to the Pod. Our
                    Elite strategies and signals cater for a multitude of
                    trading styles and market conditions. We have you covered.
                  </p>
                  <div>
                    <Link
                      linkTo='/strategies-signals?l=2'
                      iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InfoBar
        text='Are you ready to join the Killer Whale Pod?'
        button={
          <Button type='ctaInverted' inverted link='/support'>
            Getting Started
          </Button>
        }
      />

      <section className='section bg-dark'>
        <div className={clsx('container', styles.twoColumn)}>
          <div className={clsx('flow', styles.cLeft)}>
            <SectionHeader
              header='Our Hand Picked Strategies & Signals'
              subText='Never miss a dip in the market, a pump, or an all time high.
              Killer Whale monitors all of your favorite currencies 24/7.'
            />

            <Button type='cta' link='/strategies-signals?l=3'>
              View All Products
            </Button>
          </div>

          <div className={clsx(styles.productCards, styles.cRight)}>
            <Link linkTo={`/product/elite`} type='nav' noStyle>
              <ProductCard
                name='Elite'
                type='signal'
                tradeDuration={50}
                tradeFreq={60}
                experience={['dolphin', 'whale']}
              />
            </Link>
            <Link linkTo={`/product/premium`} type='nav' noStyle>
              <ProductCard
                name='Premium'
                type='Signal'
                tradeDuration={80}
                tradeFreq={25}
                experience={['fish', 'dolphin', 'whale']}
              />
            </Link>
            <Link linkTo={`/product/gain-btc`} type='nav' noStyle>
              <ProductCard
                name='GAIN BTC '
                type='strategy'
                tradeDuration={50}
                tradeFreq={50}
                experience={['fish', 'dolphin', 'whale']}
              />
            </Link>
            <Link linkTo={`/product/gain-eth`} type='nav' noStyle>
              <ProductCard
                name='GAIN ETH '
                type='strategy'
                tradeDuration={50}
                tradeFreq={50}
                experience={['fish', 'dolphin', 'whale']}
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
            <Button type='cta' link='/strategies-signals?l=3'>
              All Strategies and Signals
            </Button>
          </div>

          <div
            className={clsx(
              styles.cRight,
              styles.testimonialWrappper,
              'bg-dark'
            )}
            style={{
              // padding: '2rem',
              borderRadius: 6
              // maxWidth: '100vw'
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
                        <Link
                          linkTo={`/product/${testimonial.slug}`}
                          type='nav'
                          noStyle
                        >
                          <ProductCard
                            name={testimonial.prodName}
                            type={testimonial.type}
                            tradeDuration={testimonial.tradeDuration}
                            tradeFreq={testimonial.tradeFreq}
                            experience={[1, 2, 3]}
                          />
                        </Link>
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

export async function getStaticProps(context) {
  const global = await fetchAPI('/global')
  const salesAndDownloads = await fetchAPI('/sales-and-downloads')
  return {
    props: {
      seo: global?.defaultSeo,
      salesAndDownloads
    }, // will be passed to the page component as props
    revalidate: 10
  }
}
