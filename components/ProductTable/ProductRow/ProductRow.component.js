import styles from './ProductRow.module.scss'
import ProductCard from '../../ProductCard/ProductCard.component'
import Button from '../../Button/Button.component'
import Link from '../../Link/Link.component'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function ProductRow({ product }) {
  if (!product) return null
  return (
    <div className={styles.productRowContainer}>
      <div className={styles.container__wrapper}>
        <div className={styles.container__ribbon}>
          <p>$50</p>
        </div>
      </div>
      <div className={styles.header}>
        <Link linkTo='https://cryptohopper.com' newTab>
          <p className='text-accent' style={{ padding: '6px' }}>
            <span style={{ marginRight: '6px' }}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </span>
            View Setup Guide
          </p>
        </Link>
      </div>
      <div className={clsx(styles.row, styles.productRow)} key={product.id}>
        <div className={styles.cell}>
          <ProductCard {...product} />
        </div>

        <div className={styles.cell}>
          <p className='bold'>Starting Balance</p>
          <div className={styles.mt}>
            {product?.startingBalance?.map((bal) => (
              <p key={product.id + '_' + bal}>{bal}</p>
            ))}
          </div>
        </div>

        <div className={styles.cell}>
          <p className='bold'>Requires</p>
          <div className={styles.mt}>
            {product?.plans?.map((plan) => (
              <p key={product.id + '_' + plan} className={styles.chip}>
                {plan}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.ctaRow}>
          <Button>More Info</Button>
        </div>
      </div>
    </div>
  )
}
