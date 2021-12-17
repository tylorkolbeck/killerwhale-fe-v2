import styles from './ProductTable.module.scss'
import ProductRow from './ProductRow/ProductRow.component'

export default function ProductTable({ products }) {
  return (
    <div className='bg-light'>
      {products.map((product) => (
        <div style={{ marginBottom: '20px' }} key={'product_' + product.id}>
          <div className={styles.product}>
            <ProductRow product={product} />
          </div>
        </div>
      ))}
    </div>
  )
}
