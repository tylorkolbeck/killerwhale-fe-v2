import styles from './NewsLetterSignup.module.scss'
import Divider from '../../components/Divider/Divider.component'
import Button from '../../components/Button/Button.component'
import Link from '../../components/Link/Link.component'
import clsx from 'clsx'

export default function NewsLetterSignup() {
  return (
    <div className={clsx('flow', styles.newsLetterSignup)}>
      <div className='flow'>
        <h3
          className={clsx('fs-600 uppercase ff-good', styles.centerOnSmall)}
          style={{ maxWidth: '500px' }}
        >
          Killer Whale Pod Results
        </h3>
        <div className={styles.divider}>
          <Divider width='200px' />
        </div>
        <p className={clsx('text-accent', styles.centerOnSmall)}>
          These results are taken live from CryptoHopper, and showcase trade
          profitability of Killer Whale Strategies & Signals. These results can
          be verified in our Discord community
        </p>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.inputBtnWrapper}>
          <input type='text' placeholder='Email...' />
          <Button type='contained'>Signup</Button>
        </div>
        <div className={clsx('fs-200 text-accent', styles.disclaimer)}>
          We do not send spam or sell your info. Click here to read our{' '}
          <Link linkTo='/'> Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}
