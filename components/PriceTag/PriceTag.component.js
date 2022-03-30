import clsx from 'clsx'
import styles from './PriceTag.module.scss'

export default function PriceTag({ price }) {
  if (price[0] !== '$') {
    price = price.replace(/^/, '$')
  }
  if (price.toLowerCase().indexOf('free') > -1) {
    price = price.replace('$', '')
  }

  return (
    <div className={clsx(styles.ribbon, styles.ribbonTopRight)}>
      <span>{price}</span>
    </div>
  )
}
