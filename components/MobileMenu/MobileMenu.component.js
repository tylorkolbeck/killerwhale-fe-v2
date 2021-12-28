import styles from './MobileMenu.module.scss'
import { navLinks } from '../../data/navLinks'
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
          {navLinks.map((item, index) => {
            return (
              <h3
                key={index}
                className={clsx('ff-good', 'text-accent', styles.link)}
                onClick={() => onClickHandler(item.url)}
              >
                {item.text}
              </h3>
            )
          })}
        </div>
      )}
    </>
  )
}
