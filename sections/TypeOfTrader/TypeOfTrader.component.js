import { useState, useEffect } from 'react'
import styles from './TypeOfTrader.module.scss'
import clsx from 'clsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import ProductTable from '../../components/ProductTable/ProductTable.component'
import { useRouter } from 'next/router'
import Link from '../../components/Link/Link.component'
import Markdown from '../../components/Markdown/Markdown.component'

const traderTypes = [
  {
    id: 1,
    experience: 'fish',
    type: 'New',
    sectionTitle: 'So, you’re new to Crypto..',
    title: null,
    description: () => null,
    products: [],
    imgSrc: '/images/badges/badge_fish.svg',
    alt: 'New To Trading'
  },
  {
    id: 2,
    experience: 'dolphin',
    type: 'Experienced',
    title: null,
    sectionTitle: `So you're a Dolphin and know how to swim?`,
    description: () => null,
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
    title: null,
    sectionTitle: 'So you are one of us? A Killer Whale.',
    description: () => null,
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
    description: () => (
      <div>
        <p>
          Killer Whale Signals and strategies have been designed for all levels
          of traders, if you're new to Crypto or an experienced HODL'R we have
          strategies and signals for every experience level.
        </p>
        <br />
        <p>
          From signals sent by hand to AI that picks the right time to buy and
          sell, Killer Whale enables you to get the most out of your trading
          without the need to worry about market conditions.
        </p>
        <br />
        <p>Welcome to the Pod.</p>
      </div>
    ),
    // 'Want to browse everything we have and make your own choice? Below are all the Killer Whale Strategies and Signals',
    products: [],
    imgSrc: '/images/badges/badge_all.svg',
    alt: 'All products',
    products: []
  }
]

export default function TypeOfTrader({ products, pageData }) {
  const [experienceSelected, setExperienceSelected] = useState(null)
  const [productsToShow, setProductsToShow] = useState(null)

  let cmsData = pageData[0]?.pageContent

  useEffect(() => {
    if (cmsData) {
      traderTypes.forEach((type) => {
        let typeData = cmsData.filter(
          (data) => data.sectionName === type.experience
        )

        if (typeData && typeData[0]) {
          type.description = () => <Markdown>{typeData[0].content}</Markdown>
          type.sectionTitle = typeData[0].title
        }

        return type
      })
    }
  }, [pageData])

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
