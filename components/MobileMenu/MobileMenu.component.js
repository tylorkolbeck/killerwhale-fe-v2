import styles from './MobileMenu.module.scss'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function MobileMenu({ shown, toggleShown }) {
  const router = useRouter()

  function onClickHandler(route) {
    toggleShown()
    router.push(route)
  }

  return (
    <>
      {shown && (
        <div className={styles.mobileMenu}>
          <h3
            className={clsx('ff-good', 'text-accent', styles.link)}
            onClick={() => onClickHandler('/support')}
          >
            Support
          </h3>
        </div>
      )}
    </>
  )
}
