import clsx from 'clsx'
import styles from './PriceTagMobile.module.scss'
import Button from '../Button/Button.component'

export default function PriceTag({ product }) {
  if (product.price[0] !== '$') {
    product.price = product.price.replace(/^/, '$')
  }
  if (product.price.toLowerCase().indexOf('free') > -1) {
    product.price = product.price.replace('$', '')
  }

  return (
    <a
      className={clsx(styles.mobilePriceTag)}
      href={product.chLink}
      target='_blank'
      rel='noreferrer'
    >
      <Button fullWidth>{product.price}</Button>
    </a>
  )
}
