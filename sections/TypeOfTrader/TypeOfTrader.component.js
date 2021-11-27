import { useState, useEffect } from 'react'
import styles from './TypeOfTrader.module.scss'
import clsx from 'clsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import ProductTable from '../../components/ProductTable/ProductTable.component'
import { useRouter } from 'next/router'

const traderTypes = [
  {
    id: 1,
    type: 'New To Trading',
    title: 'So, you are new to trading...',
    description:
      'Eu fugiat proident pariatur voluptate deserunt non sunt consectetur laborum sunt aliquip aliqua.',
    products: [
      {
        name: 'GAIN BTC',
        type: 'Strategy',
        tradeDuration: '50',
        tradeFreq: '50',
        startingBalance: [
          '$500 - $1,000',
          '$1,000 - $2,500',
          '$2,500 - $10,000',
          '$10,000+'
        ],
        plans: ['Explorer', 'Adventurer']
      },
      {
        name: 'GAIN BTC',
        type: 'Strategy',
        tradeDuration: '50',
        tradeFreq: '50',
        startingBalance: [
          '$500 - $1,000',
          '$1,000 - $2,500',
          '$2,500 - $10,000',
          '$10,000+'
        ],
        plans: ['Explorer', 'Adventurer']
      },
      {
        name: 'GAIN BTC',
        type: 'Strategy',
        tradeDuration: '50',
        tradeFreq: '50',
        startingBalance: [
          '$500 - $1,000',
          '$1,000 - $2,500',
          '$2,500 - $10,000',
          '$10,000+'
        ],
        plans: ['Explorer', 'Adventurer']
      },
      {
        name: 'GAIN BTC',
        type: 'Strategy',
        tradeDuration: '50',
        tradeFreq: '50',
        startingBalance: [
          '$500 - $1,000',
          '$1,000 - $2,500',
          '$2,500 - $10,000',
          '$10,000+'
        ],
        plans: ['Explorer', 'Adventurer']
      },
      {
        name: 'GAIN BTC',
        type: 'Strategy',
        tradeDuration: '50',
        tradeFreq: '50',
        startingBalance: [
          '$500 - $1,000',
          '$1,000 - $2,500',
          '$2,500 - $10,000',
          '$10,000+'
        ],
        plans: ['Explorer', 'Adventurer']
      },
      {
        name: 'GAIN BTC',
        type: 'Strategy',
        tradeDuration: '50',
        tradeFreq: '50',
        startingBalance: [
          '$500 - $1,000',
          '$1,000 - $2,500',
          '$2,500 - $10,000',
          '$10,000+'
        ],
        plans: ['Explorer', 'Adventurer']
      }
    ],
    imgSrc: '/images/badges/badge_fish.svg',
    alt: 'New To Trading'
  },
  {
    id: 2,
    type: 'Experienced',
    title: 'So, you are not new but looking for some help...',
    description:
      'Eu fugiat proident pariatur voluptate deserunt non sunt consectetur laborum sunt aliquip aliqua.',
    products: [],
    imgSrc: '/images/badges/badge_dolphin.svg',
    alt: 'Experienced Trader'
  },
  {
    id: 3,
    type: 'Killer Whale',
    title: 'So, you are one of us...',
    description:
      'Eu fugiat proident pariatur voluptate deserunt non sunt consectetur laborum sunt aliquip aliqua.',
    products: [],
    imgSrc: '/images/badges/badge_whale.svg',
    alt: 'Killer Whale'
  },
  {
    id: 4,
    type: 'All Products',
    title: 'Want to just see everything?',
    description:
      'Eu fugiat proident pariatur voluptate deserunt non sunt consectetur laborum sunt aliquip aliqua.',
    products: [],
    imgSrc: '/images/badges/badge_fish.svg',
    alt: 'All products'
  }
]

export default function TypeOfTrader() {
  const [typeSelected, setTypeSelected] = useState(null)
  const router = useRouter()

  useEffect(() => {
    setTypeSelected(traderTypes[0])
  }, [])

  function setSelectedTypeHandler(typeId) {
    router.push('#ProductTable')
    let type = traderTypes.filter((type) => type.id === typeId)[0]
    setTypeSelected(type)
  }

  return (
    <div>
      <div className={styles.TypeOfTrader}>
        {traderTypes.map((type) => {
          return (
            <div
              key={type.id}
              onClick={() => setSelectedTypeHandler(type.id)}
              className={clsx(styles.typeCard, {
                [styles.selected]: type.id === typeSelected?.id
              })}
            >
              <img src={type.imgSrc} alt={type.alt} />
              <p className={clsx({ bold: type?.type === typeSelected?.type })}>
                {type?.type}
              </p>
            </div>
          )
        })}
      </div>
      {typeSelected && (
        <div className={clsx(styles.description, 'bg-light')} id='ProductTable'>
          <div className={clsx('container', 'flow', styles.descriptionContent)}>
            <p className='text-green bold'>{typeSelected.type}</p>
            <SectionHeader
              header={typeSelected.title}
              subText={typeSelected.description}
              hSize='m'
            />
          </div>
          <div className={styles.productCardWrapper}>
            <ProductTable
              products={typeSelected?.products}
              type={typeSelected?.type}
            />
            <p
              className='center text-green bold pointer'
              onClick={() => setSelectedTypeHandler(typeSelected.id)}
            >
              Back to top
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
