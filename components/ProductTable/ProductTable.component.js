import styles from './ProductTable.module.scss'
import ProductCard from './../ProductCard/ProductCard.component'
import clsx from 'clsx'
import Button from '../Button/Button.component'

export default function ProductTable({ products, type }) {
  return (
    <div className={styles.ProductTable}>
      {/* <div className={clsx(styles.row)}>
        <div></div>
        <p className='fs-500 center text-green bold'> Viewing {type}</p>
        <div></div>
      </div> */}
      {products.map((product) => (
        <div className={clsx(styles.row, styles.productRow)} key={product.id}>
          <div className={styles.cell}>
            <ProductCard {...product} />
          </div>
          <div className={styles.cell}>
            <p className='bold'>Starting Balance</p>
            <div style={{ marginTop: '20%' }}>
              {product?.startingBalance?.map((bal) => (
                <p key={product.id + '_' + bal}>{bal}</p>
              ))}
            </div>
          </div>
          <div className={styles.cell}>
            <p className='bold'>Plans</p>
            <div style={{ marginTop: '20%' }}>
              {product?.plans?.map((plan) => (
                <p key={product.id + '_' + plan}>{plan}</p>
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Button>View On Marketplace</Button>
          </div>
        </div>
      ))}
    </div>
  )
}
