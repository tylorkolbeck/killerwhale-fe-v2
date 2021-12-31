import { useState, useEffect } from 'react'
import styles from './TypeOfTrader.module.scss'
import clsx from 'clsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import ProductTable from '../../components/ProductTable/ProductTable.component'
import { useRouter } from 'next/router'
import Link from '../../components/Link/Link.component'

const traderTypes = [
  {
    id: 1,
    experience: 'fish',
    type: 'New',
    sectionTitle: 'So, you’re new to Crypto..',
    title: 'New To Trading',
    description: () => (
      <div>
        <p>
          Don’t worry, we’ve got you. Crypto trading can be overwhelming to
          those getting into it for the first time. There’s lots to learn,
          staking. forking. burning, Layer 1 and Layer 2 Protocols, DEFI, NFTs
          the list goes on. The easiest way is to buy crypto from an exchange
          and storing it in your cryptocurrency wallet.
        </p>
        <br />
        <p>
          A great way to build your long term portfolio, but for those who want
          to see consistent and steady gains across an array of coins, Killer
          Whale strategies and signals and automated bot trading is a great way
          to start, without the need to understand market trends and do deep
          analysis.
        </p>
        <br />
        <p>
          Our free strategy allows you to trade up to 15 coins and we provide
          full support via our on-boarding and{' '}
          <Link linkTo='/support'>Support</Link> to ensure you get off to a
          profitable start in your trading bot journey.
        </p>
      </div>
    ),
    products: [],
    imgSrc: '/images/badges/badge_fish.svg',
    alt: 'New To Trading'
  },
  {
    id: 2,
    experience: 'dolphin',
    type: 'Experienced',
    title: 'Experienced Trader',
    sectionTitle: `So you're a Dolphin and know how to swim?`,
    description: () => (
      <div>
        <p>
          So you’ve been around crypto for a while and are looking for new ways
          to make your portfolio work for you.{' '}
        </p>
        <br />
        <p>
          Our variety of strategies will let you take your trading to the next
          level, no matter what your investment strategy or the market
          condition.
        </p>
        <br />
        <p>
          Have you lost money buying into a project at the wrong time? Or sold
          your holdings in a coin only to see it gain in value? Take the emotion
          out of your trades and let our advanced AI and Signals do the work for
          you. Join our pod of 1,000’s on our Discord community and ensure you
          are part of the action when the Pod next feeds!
        </p>
        <br />
        <p></p>
      </div>
    ),
    // 'Our variety of strategies will let you take your trading to the next level, no matter what your investment strategy or the market condition. ',
    products: [],
    imgSrc: '/images/badges/badge_dolphin.svg',
    alt: 'Experienced Trader',
    products: []
  },
  {
    id: 3,
    experience: 'whale',
    type: 'Killer Whale',
    title: 'Killer Whale',
    sectionTitle: 'So you are one of us? A Killer Whale.',
    description: () => (
      <div>
        <p>
          So you consider yourself a Killer Whale? Welcome to the Pod. You’re
          here because you’ve heard of the kind of returns possible using
          automated trading and want part of the action. You want to see your
          already healthy crypto holdings continue to give you solid returns on
          a daily basis.
        </p>
        <br />
        <p>
          Our variety of strategies and signals suit a multitude of trading
          styles. Whether you want to get in and out of trades in hours or
          invest in trades in the mid to short term Killer Whale has you
          covered.
        </p>
      </div>
    ),
    // 'Our variety of strategies and signals suit a multitude of trading styles. Whether you want to get in and out of trades in hours or invest in trades in the mid to short term Killer Whale has you covered.',
    products: [],
    imgSrc: '/images/badges/badge_whale.svg',
    alt: 'Killer Whale',
    products: []
  },
  {
    id: 4,
    experience: 'all',
    type: 'All Products',
    title: 'See everything?',
    sectionTitle: 'All Strategies & Signals',
    description: () => null,
    // 'Want to browse everything we have and make your own choice? Below are all the Killer Whale Strategies and Signals',
    products: [],
    imgSrc: '/images/badges/badge_all.svg',
    alt: 'All products',
    products: []
  }
]

export default function TypeOfTrader({ products }) {
  const [experienceSelected, setExperienceSelected] = useState(null)
  const [productsToShow, setProductsToShow] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const levels = ['fish', 'dolphin', 'whale', 'all']
    let levelParam = parseInt(router.query.l)
    setExperienceSelected(traderTypes[levelParam ? levelParam : 0])
    // setExperienceSelectedHandler(levels[levelParam])
    filterProducts(levels[levelParam] ? levels[levelParam] : 'fish')
  }, [router.query.l])

  function setExperienceSelectedHandler(experience) {
    const tableRef = document.querySelector('#ProductTable')
    const offsetTop = document.querySelector('#ProductTable').offsetTop
    scroll({
      top: offsetTop,
      behavior: 'smooth'
    })
    let traderType = traderTypes.filter(
      (type) => type.experience === experience
    )[0]

    console.log('>>>', experience)
    if (experience === 'all') {
      setExperienceSelected(traderTypes[3])
      setProductsToShow(products)
      return
    } else {
      setExperienceSelected(traderType)
      filterProducts(traderType.experience)
    }
  }

  function filterProducts(experienceLevel) {
    if (experienceLevel === 'all') {
      setProductsToShow(products)
      return
    }
    if (experienceLevel) {
      let filtered = []
      products.forEach((p) => {
        p.experience.forEach((e) => {
          if (e.experience === experienceLevel) {
            filtered.push(p)
          }
        })
      })
      setProductsToShow(filtered)
    }
  }

  return (
    <div>
      <div className={clsx(styles.TypeOfTrader, 'bg-dark')}>
        {traderTypes.map((type) => {
          return (
            <div
              key={type.id}
              onClick={() => setExperienceSelectedHandler(type.experience)}
              className={clsx(styles.typeCard, {
                [styles.selected]: type.id === experienceSelected?.id
              })}
            >
              <img src={type.imgSrc} alt={type.alt} />
              <p
                className={clsx(
                  { bold: type?.type === experienceSelected?.type },
                  styles.type
                )}
              >
                {type?.type}
              </p>
            </div>
          )
        })}
      </div>
      {experienceSelected && (
        <div className={clsx(styles.description, 'bg-light')} id='ProductTable'>
          <div className={clsx('container', 'flow', styles.descriptionContent)}>
            <SectionHeader header={experienceSelected.sectionTitle} hSize='m'>
              {experienceSelected.description()}
            </SectionHeader>
          </div>
          <div className={clsx(styles.productCardWrapper, 'bg-dark')}>
            {productsToShow && <ProductTable products={productsToShow} />}
          </div>
          <p
            className='center text-green bold pointer'
            onClick={() =>
              setExperienceSelectedHandler(experienceSelected.experience)
            }
          >
            Back to top
          </p>
        </div>
      )}
    </div>
  )
}
