import { useState, useEffect } from 'react'
import styles from './TypeOfTrader.module.scss'
import clsx from 'clsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import ProductTable from '../../components/ProductTable/ProductTable.component'
import { useRouter } from 'next/router'

const traderTypes = [
  {
    id: 1,
    experience: 'fish',
    type: 'New',
    sectionTitle: 'Best for new traders',
    title: 'New To Trading',
    description:
      'Killer Whale strategies and signals and automated bot trading is a great way to start out in Crypto, without the need to understand market trends and do deep analysis.',
    products: [],
    imgSrc: '/images/badges/badge_fish.svg',
    alt: 'New To Trading'
  },
  {
    id: 2,
    experience: 'dolphin',
    type: 'Experienced',
    title: 'Experienced Trader',
    sectionTitle: 'Best for experienced traders',
    description:
      'Our variety of strategies will let you take your trading to the next level, no matter what your investment strategy or the market condition. ',
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
    sectionTitle: 'Best for the Killer Whales',
    description:
      'Our variety of strategies and signals suit a multitude of trading styles. Whether you want to get in and out of trades in hours or invest in trades in the mid to short term Killer Whale has you covered.',
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
    description:
      'Want to browse everything we have and make your own choice? Below are all the Killer Whale Strategies and Signals',
    products: [],
    imgSrc: '/images/badges/badge_all.svg',
    alt: 'All products',
    products: []
  }
]

export default function TypeOfTrader({ products }) {
  const [experienceSelected, setExperienceSelected] = useState(traderTypes[0])
  const [productsToShow, setProductsToShow] = useState(null)

  const router = useRouter()

  useEffect(() => {
    setExperienceSelected(traderTypes[0])
    filterProducts('fish')
  }, [])

  function setExperienceSelectedHandler(experience) {
    router.push('#ProductTable')
    let traderType = traderTypes.filter(
      (type) => type.experience === experience
    )[0]

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
            <SectionHeader
              header={experienceSelected.sectionTitle}
              subText={experienceSelected.description}
              hSize='m'
            />
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
