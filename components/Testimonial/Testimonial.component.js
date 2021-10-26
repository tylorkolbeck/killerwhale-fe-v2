import React from 'react'
import styles from './Testimonial.module.scss'
import clsx from 'clsx'

export default function Testimonial({
  description,
  strategy,
  startBal,
  profit,
  name,
  strategyCard
}) {
  return (
    <div className={clsx('flow', styles.Testimonial)}>
      <div>
        <h4 className='fs-500 ff-good'> {name}</h4>
        <p className='text-accent'>{description}</p>
      </div>

      <div className={clsx('grid', styles.cardDetails)}>
        <div className='flow'>
          <div>
            <p className='fs-200 uppercase letter-spacing-3'>
              Starting Balance
            </p>
            <p className='text-green'>{startBal}</p>
          </div>
          <div>
            <p className='fs-200 uppercase letter-spacing-3'>Profit</p>
            <p className='text-green'>{profit}</p>
          </div>
          <div>
            <p className='fs-200 uppercase letter-spacing-3'>Strategy Used</p>
            <p className='text-green'>{strategy}</p>
          </div>
        </div>
        <div className={styles.strategyCard}>Strategy Card</div>
      </div>
    </div>
  )
}
