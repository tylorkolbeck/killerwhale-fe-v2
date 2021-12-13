import { useState, useEffect } from 'react'
import styles from './TypeOfTrader.module.scss'
import clsx from 'clsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import ProductTable from '../../components/ProductTable/ProductTable.component'
import { useRouter } from 'next/router'
import { strategies } from '../../data/strategies'

const traderTypes = [
  {
    id: 1,
    type: 'New',
    sectionTitle: 'Best for new traders',
    title: 'New To Trading',
    description:
      'Killer Whale strategies and signals and automated bot trading is a great way to start out in Crypto, without the need to understand market trends and do deep analysis.',
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
    title: 'Experienced Trader',
    sectionTitle: 'Best for experienced traders',
    description:
      'Our variety of strategies will let you take your trading to the next level, no matter what your investment strategy or the market condition. ',
    products: [],
    imgSrc: '/images/badges/badge_dolphin.svg',
    alt: 'Experienced Trader',
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
    ]
  },
  {
    id: 3,
    type: 'Killer Whale',
    title: 'Killer Whale',
    sectionTitle: 'Best for the Killer Whales',
    description:
      'Our variety of strategies and signals suit a multitude of trading styles. Whether you want to get in and out of trades in hours or invest in trades in the mid to short term Killer Whale has you covered.',
    products: [],
    imgSrc: '/images/badges/badge_whale.svg',
    alt: 'Killer Whale',
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
    ]
  },
  {
    id: 4,
    type: 'All Products',
    title: 'See everything?',
    sectionTitle: 'Viewing All Products',
    description:
      'Want to browse everything we have and make your own choice? Below are all the Killer Whale Strategies and Signals',
    products: [],
    imgSrc: '/images/badges/badge_all.svg',
    alt: 'All products',
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
    ]
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
      <div className={clsx(styles.TypeOfTrader, 'bg-dark')}>
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
              <p
                className={clsx(
                  { bold: type?.type === typeSelected?.type },
                  styles.type
                )}
              >
                {type?.type}
              </p>
            </div>
          )
        })}
      </div>
      {typeSelected && (
        <div className={clsx(styles.description, 'bg-light')} id='ProductTable'>
          <div className={clsx('container', 'flow', styles.descriptionContent)}>
            {/* <p className='text-green bold'>
              <i>{typeSelected.type}</i>
            </p> */}
            <SectionHeader
              header={typeSelected.sectionTitle}
              subText={typeSelected.description}
              hSize='m'
            />
          </div>
          <div className={clsx(styles.productCardWrapper, 'bg-dark')}>
            <ProductTable products={strategies} type={typeSelected?.type} />
          </div>
          <p
            className='center text-green bold pointer'
            onClick={() => setSelectedTypeHandler(typeSelected.id)}
          >
            Back to top
          </p>
        </div>
      )}
    </div>
  )
}
