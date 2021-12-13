import clsx from 'clsx'
import styles from './product.module.scss'
import Button from '../../components/Button/Button.component'
import ProductCard from '../../components/ProductCard/ProductCard.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import Link from '../../components/Link/Link.component'
import List from '../../components/List/List.component'
import { strategies } from '../../data/strategies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'

export default function product({ product }) {
  if (!product) {
    return <p>Loading...</p>
  }
  return (
    <div className='bg-dark'>
      <div className={clsx('container')} style={{ padding: '2rem' }}>
        <Link linkTo='/strategies-signals'>
          <FontAwesomeIcon icon={faArrowLeft} /> All Strategies and Signals
        </Link>

        {/* <h2 className='ff-good fs-600 mt-1' style={{ columnSpan: 'all' }}>
          {product.name} {product.type}
        </h2> */}

        <div className={clsx(styles.productHeader, 'bg-light')}>
          <div>
            <ProductCard
              name={product.name}
              type={product.type}
              tradeDuration={product.tradeDuration}
              tradeFreq={product.tradeFreq}
            />
          </div>
          <div>
            <p className={clsx(styles.detailHeader)}>
              <b>Features</b>
            </p>
            <div className='text-accent'>
              <div style={{ marginLeft: '1rem' }}>
                <List items={product.features} />
              </div>
            </div>
            <div>
              <p className={clsx(styles.detailHeader, 'mt-1')}>
                <b>Templates</b>
              </p>

              {product.template.map((temp) => (
                <p>
                  <Link linkTo={temp.link} className='text-accent'>
                    {temp.title}
                    <span className='ml'>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>
                  </Link>
                </p>
              ))}
            </div>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            {/* <p className={clsx(styles.detailHeader)}>
              <b>Price</b>
            </p> */}
            {/* <p className='fs-500 flex center v-align-c'>{product.price}</p> */}
            <div>
              <p className={clsx(styles.detailHeader)}>
                <b>Requires</b>
              </p>
              <List items={product.requirements} />
              {/* {product.requirements.map((req) => (
                <p className='text-accent'>{req}</p>
              ))} */}
            </div>

            <div
              className={clsx(styles.controls)}
              style={{ marginTop: 'auto' }}
            >
              <a href={product.setupGuideLink} target='_blank'>
                <Button fullWidth type='outlined'>
                  Setup Guide
                </Button>
              </a>

              <div className='mt-1'>
                <a href={product.chLink} target='_blank'>
                  <Button fullWidth>Get on Marketplace</Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-dark'>
          <div className='mt-2'>
            <SectionHeader header='Description' hSize='s'>
              <p>{product.description}</p>
              <p>
                Take the emotion out of your trading and let the best in the
                business take care of your trading for Killer Whale Premium
                signal, exclusive to Cryptohopper.
              </p>
            </SectionHeader>
          </div>
          {/* <div>
            <div className='mt-4'>
              <SectionHeader header='Need Help?' hSize='s'>
                <p>
                  Not sure where to get started? We have setup guides, a large
                  community, live chat, as well as a support team that is here
                  to answer any questions you have.
                </p>
              </SectionHeader>
            </div>
            <div className='mt-3'>
              <Button>Getting Started</Button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = strategies.map((s) => {
    return { params: { slug: s.slug } }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  // const postData = await getPostData(params.slug)
  // const { coin } = await fetchAPI('/coin-list')
  const product = strategies.find((strat) => strat.slug === params.slug)

  return {
    props: {
      product: product
    },
    revalidate: 1
  }
}
