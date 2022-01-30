import styles from './MobileMenu.module.scss'
import { navLinks } from '../../data/navLinks'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { strategies } from '../../data/strategies'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function MobileMenu({ shown, toggleShown }) {
  const router = useRouter()
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleClickBtn = () => {
    setDropdownVisible(!dropdownVisible)
  }

  function onClickHandler(route) {
    toggleShown()
    router.push(route)
  }

  function filterProducts(filter) {
    return strategies.filter((strat) => strat.type === filter)
  }

  return (
    <>
      {shown && (
        <div className={styles.mobileMenu}>
          {navLinks.map((item, index) => {
            if (item.subLinks) {
              return (
                <div
                  onClick={handleClickBtn}
                  className={styles.dropdownWrapper}
                >
                  <p className={clsx('ff-good', 'text-accent', styles.link)}>
                    <h3>
                      {item.text}
                      <span style={{ marginLeft: '.5rem' }}>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </h3>
                  </p>
                  {dropdownVisible && (
                    <div className={styles.subLinks}>
                      <ul>
                        {/* <li>
                          <b className='fs-400'>Strategies</b>
                        </li> */}
                        {filterProducts('strategy').map((strat) => (
                          <li
                            key={strat.id}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.link
                            )}
                            onClick={() =>
                              onClickHandler(`/product/${strat.slug}`)
                            }
                          >
                            {strat.name}
                          </li>
                        ))}
                        <li>
                          <h3
                            key={index}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.view
                            )}
                            fullWidth
                            onClick={() =>
                              onClickHandler('/strategies-signals')
                            }
                          >
                            View All
                          </h3>
                        </li>
                      </ul>
                      <ul>
                        {/* <li>
                          <b
                            className='fs-400'
                            style={{ marginBottom: '.5rem' }}
                          >
                            Signals
                          </b>
                        </li> */}

                        {filterProducts('signal').map((strat) => (
                          <li
                            key={strat.id}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.link
                            )}
                            onClick={() =>
                              onClickHandler(`/product/${strat.slug}`)
                            }
                          >
                            {strat.name}
                          </li>
                        ))}
                        <li>
                          <h3
                            key={index}
                            className={clsx(
                              'ff-good',
                              'text-accent',
                              styles.view
                            )}
                            fullWidth
                            onClick={() =>
                              onClickHandler('/strategies-signals')
                            }
                          >
                            View All
                          </h3>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )
            } else {
              return (
                <h3
                  key={index}
                  className={clsx('ff-good', 'text-accent', styles.link, router.pathname == item.url ? styles.active : '')}
                  onClick={() => onClickHandler(item.url)}
                >
                  {item.text}
                </h3>
              )
            }
          })}
        </div>
      )}
    </>
  )
}
