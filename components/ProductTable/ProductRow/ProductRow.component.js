import styles from './ProductRow.module.scss'
import ProductCard from '../../ProductCard/ProductCard.component'
import PriceTag from '../../PriceTag/PriceTag.component'
import PriceTagMobile from '../../PriceTag/PriceTagMobile.component'
import Button from '../../Button/Button.component'
import Link from '../../Link/Link.component'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import List from '../../List/List.component'
import currency from 'currency.js'

export default function ProductRow({ product }) {
  if (!product) return null

  return (
    <div className={styles.productRowContainer}>
      <PriceTag price={product.price} />
      <div className={clsx(styles.row, styles.productRow)} key={product.id}>
        <div className={styles.cell}>
          <Link linkTo={`/product/${product.slug}`}>
            <ProductCard
              {...product}
              experience={product?.experience.map((e) => e.experience)}
            />
          </Link>
          <div className='text-acccent mt-1'>
            <PriceTagMobile product={product} />
          </div>
        </div>

        <div className={styles.productInfo}>
          <div>
            <h2 className='bold mb-1'>Features</h2>

            <div>
              {/* <span className='fs-500 bold'>{product.name}</span> */}
              <p className='fs-300'>
                <Link linkTo={product.setupGuideLink} newTab>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span className='ml'>
                    <u>View Setup Guide</u>
                  </span>
                </Link>
              </p>
            </div>

            <div className='mt'>
              <List items={product?.features?.map((f) => f.feature)} />
            </div>
          </div>

          <div className={styles.controls}>
            <div className='mt-2'>
              <a href={`/product/${product.slug}`} type='nav'>
                <Button type='outlined' fullWidth>
                  More Info
                </Button>
              </a>
            </div>
            <div className='mt-1'>
              <a href={product.chLink} target='_blank' rel='noreferrer'>
                <Button fullWidth>Get on Marketplace</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
