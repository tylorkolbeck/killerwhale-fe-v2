import styles from './ProductRow.module.scss'
import ProductCard from '../../ProductCard/ProductCard.component'
import Button from '../../Button/Button.component'
import Link from '../../Link/Link.component'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import List from '../../List/List.component'
import { useRouter } from 'next/router'

export default function ProductRow({ product }) {
  const router = useRouter()

  if (!product) return null

  return (
    <div className={styles.productRowContainer}>
      <div className={clsx(styles.row, styles.productRow)} key={product.id}>
        <div className={styles.cell}>
          <ProductCard {...product} />
        </div>

        <div className={styles.productInfo}>
          <div>
            <span className='fs-500 bold'>{product.name}</span>
            <p className='fs-300'>
              <Link linkTo={product.setupGuideLink}>
                <FontAwesomeIcon icon={faInfoCircle} />
                <span className='ml'>
                  <u>View Setup Guide</u>
                </span>
              </Link>
            </p>
          </div>

          <div>
            <h3 className='bold fs-300 mt-1'>Features</h3>
            <div className='ml-1 mt'>
              <List items={product.features} />
            </div>
          </div>

          <div className={styles.controls}>
            <div className='mt-1'>
              <Link linkTo={`product/${product.slug}`}>
                <Button type='outlined' fullWidth>
                  More Info
                </Button>
              </Link>
            </div>
            <div className='mt-1'>
              <a href={product.chLink} target='_blank'>
                <Button fullWidth>Get on Marketplace</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
