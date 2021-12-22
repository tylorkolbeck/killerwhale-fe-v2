import styles from './InfoBar.module.scss'

export default function InfoBar({ text, button, quote }) {
  return (
    <section
      className={'section bg-green center'}
      style={{ padding: '1.5rem 0' }}
    >
      {quote ? (
        <blockquote className={styles.quote}>{quote}</blockquote>
      ) : (
        <h4 className='fs-500'>{text}</h4>
      )}

      {button && <div className='mt-1'>{button}</div>}
    </section>
  )
}
