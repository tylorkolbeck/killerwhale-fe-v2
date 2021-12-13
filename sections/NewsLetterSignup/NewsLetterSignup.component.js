import styles from './NewsLetterSignup.module.scss'
import Divider from '../../components/Divider/Divider.component'
import Button from '../../components/Button/Button.component'
import Link from '../../components/Link/Link.component'
import clsx from 'clsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'

export default function NewsLetterSignup() {
  return (
    <div className={clsx('flow', styles.newsLetterSignup)}>
      <div className='flow'>
        <SectionHeader
          hSize={'s'}
          header='Stay Up To Date'
          subText='Get weekly insights and updates from the Killer Whale Crew'
        />
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
