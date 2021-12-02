import styles from './ProductTable.module.scss'
import ProductRow from './ProductRow/ProductRow.component'
import Link from 'next/link'

export default function ProductTable({ products, type }) {
  return (
    <div className='bg-light'>
      {products.map((product) => (
        <Link href='/product/product'>
          <div style={{ marginBottom: '20px' }}>
            <div className={styles.product}>
              <ProductRow product={product} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
