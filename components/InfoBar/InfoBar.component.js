import styles from './InfoBar.module.scss'
import clsx from 'clsx'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function InfoBar({ text, button, quote, bold }) {
  return (
    <section
      className={'section bg-green center'}
      style={{ padding: '1.5rem 0' }}
    >
      {quote ? (
        <blockquote className={clsx(styles.quote, { bold: bold })}>
          <span style={{ marginRight: '2rem' }}>
            <FaQuoteLeft size={35} />
          </span>
          {quote}
          <span style={{ marginLeft: '2rem' }}>
            <FaQuoteRight size={35} />
          </span>
        </blockquote>
      ) : (
        <h4 className='fs-500'>{text}</h4>
      )}

      {button && <div className='mt-1'>{button}</div>}
    </section>
  )
}
