import clsx from 'clsx'
import styles from './product.module.scss'
import Button from '../../components/Button/Button.component'
import ProductCard from '../../components/ProductCard/ProductCard.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import Link from '../../components/Link/Link.component'
import List from '../../components/List/List.component'
import { fetchAPI } from '../../lib/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextSeo } from 'next-seo'
import {
  faExternalLinkAlt,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'

const arrayOfObjectsToStrings = (array, objectKey) => {
  if (Array.isArray(array)) {
    return array.map((item) => {
      return item[objectKey]
    })
  } else {
    return []
  }
}

export default function product({ product }) {
  const experience = arrayOfObjectsToStrings(product?.experience, 'experience')
  const features = arrayOfObjectsToStrings(product?.features, 'feature')
  const requirements = arrayOfObjectsToStrings(
    product?.requirements,
    'requirement'
  )

  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <div className='bg-dark'>
      <NextSeo
        title={product.name}
        description='KillerWhaleCrypto focuses on cryptocurrency trading and automated trading bots. We discuss and educate on chart patterns, technical analysis for various crypto like bitcon (BTC), Ethereum (ETH) and altcoins.
        Join us today and CHANGE THE WAY YOU TRADE'
      />
      <div className={clsx('container')} style={{ padding: '2rem' }}>
        <Link linkTo='/strategies-signals'>
          <FontAwesomeIcon icon={faArrowLeft} /> All Strategies and Signals
        </Link>

        <h1 className='ff-good fs-700 mt-2'>
          {product.name} {product.type}
        </h1>

        <div className={clsx(styles.productHeader, 'bg-light')}>
          <div className='flex' style={{ flexDirection: 'column' }}>
            <ProductCard
              name={product.name}
              type={product.type}
              tradeDuration={product.tradeDuration}
              tradeFreq={product.tradeFreq}
              experience={experience}
            />
          </div>

          <div>
            <div className={styles.productInfoGrid}>
              <div>
                <p className={clsx(styles.detailHeader)}>
                  <b>Features</b>
                </p>
                <div className='text-accent'>
                  <div style={{ marginLeft: '1rem' }}>
                    <List
                      items={[
                        ...features,
                        <Link
                          linkTo='https://discord.gg/UNXZhFVnrA'
                          newTab
                          key={'discord_link'}
                        >
                          Access to Discord Channel
                        </Link>
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className={clsx(styles.detailHeader)}>
                  <b>Templates</b>
                </p>

                {product?.templates?.map((temp, index) => (
                  <p key={index} style={{ marginLeft: '1rem' }}>
                    <Link linkTo={temp.link} className='text-accent' newTab>
                      {temp.title}
                      <span className='ml'>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </span>
                    </Link>
                  </p>
                ))}
              </div>

              <div>
                <div>
                  <p className={clsx(styles.detailHeader)}>
                    <b>Requires</b>
                  </p>
                  <div className='text-accent'>
                    <div style={{ marginLeft: '1rem' }}>
                      {requirements && (
                        <List
                          items={[
                            ...requirements,

                            <Link
                              linkTo='https://www.kucoin.com/ucenter/signup?rcode=sdr57y'
                              newTab
                              key={'kucoin_link'}
                            >
                              A crypto exchange account: KuCoin
                            </Link>,
                            <Link
                              key='ch_link'
                              linkTo='https://www.cryptohopper.com/?atid=14880'
                              newTab
                            >
                              Cryptohopper Account (any subscription)
                            </Link>
                          ]}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className={styles.detailHeader}>
                  <b>Recommended Balance</b>
                </p>
                <div className='text-accent'>
                  <div style={{ marginLeft: '1rem' }}>
                    {product.minStartBalance}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={clsx(styles.controls)}
              style={{ marginTop: 'auto' }}
            >
              <a href={product.setupGuideLink} target='_blank' rel='noreferrer'>
                <Button fullWidth type='outlined'>
                  Setup Guide
                </Button>
              </a>

              <div>
                <a href={product.chLink} target='_blank' rel='noreferrer'>
                  <Button fullWidth>Get on Marketplace</Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-dark'>
          <div className='mt-2'>
            <SectionHeader header='Description' hSize='s'>
              <p className='text-accent'>{product.description}</p>
            </SectionHeader>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const products_v2 = await fetchAPI('/products-v-2-s')
  const paths = products_v2.map((s) => {
    return { params: { slug: s.slug } }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const products = await fetchAPI(`/products-v-2-s?slug=${params.slug}`)
  return {
    props: {
      product: products[0]
    },
    revalidate: 1
  }
}
