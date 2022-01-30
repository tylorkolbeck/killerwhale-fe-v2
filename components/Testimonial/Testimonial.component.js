import React from 'react'
import styles from './Testimonial.module.scss'
import clsx from 'clsx'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Testimonial({
  description,
  startBal,
  profit,
  name,
  strategyCard
}) {
  return (
    <div className={clsx('flow', styles.Testimonial, styles.embla__slide)}>
      <div className={styles.embla__slide__inner}>
        <div className={styles.cardHeader}>
          <h4 className='fs-500'> {name}</h4>

          <p className='text-accent'>
            <span style={{ marginRight: '.5rem' }}>
              <FaQuoteLeft size={15} />
            </span>
            {description}
            <span style={{ marginLeft: '.5rem' }}>
              <FaQuoteRight size={15} />
            </span>
          </p>
        </div>
        <div className='flex' style={{ justifyContent: 'space-between' }}>
          <div>
            <p className='fs-200 uppercase letter-spacing-3 text-accent bold'>
              Starting Balance
            </p>
            <p className='text-green'>{startBal}</p>
          </div>
          <div>
            <p className='fs-200 uppercase letter-spacing-3 text-accent bold'>
              Profit
            </p>
            <p className='text-green bold'>
              {profit}{' '}
              <FiArrowUpRight size={25} style={{ marginBottom: '-6px' }} />
            </p>
          </div>
          {/* <div>
          <p className='fs-200 uppercase letter-spacing-3'>Used</p>
          <p className='text-accent'>
            {strategy}
            <span className={clsx('fs-200', styles.link)}>
              <Link linkTo='/'>View</Link>
            </span>
          </p>
        </div> */}
        </div>

        {/* <div className={clsx('grid', styles.cardDetails)}>
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
            <p className='text-accent'>
              {strategy}
              <span className={clsx('fs-200', styles.link)}>
                <Link linkTo='/'>View</Link>
              </span>
            </p>
          </div>
        </div>
      </div> */}
        <div className={styles.strategyCard}>{strategyCard}</div>
      </div>
    </div>
  )
}
