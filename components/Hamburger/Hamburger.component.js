import styles from './Hamburger.module.scss'
import Link from '../../components/Link/Link.component'
import { strategies } from '../../data/strategies'
import clsx from 'clsx'

export default function Hamburger({ isOpen }) {
  function filterProducts(filter) {
    return strategies.filter((strat) => strat.type === filter)
  }

  return (
    <>
      <div className={styles.hamburger}>
        <div className='burger burger1' />
        <div className='burger burger2' />
        <div className='burger burger3' />
      </div>
      <nav className={clsx(styles.navBar)}>
        <div className={styles.navbarContent}>
          <ul className='navLinks'>
            <li>
              <Link
                linkTo='/strategies-signals'
                type='nav'
                subLinks={
                  <>
                    <div className='subLinks'>
                      <ul>
                        <li>
                          <b className='fs-400'>Strategies</b>
                        </li>
                        <li>
                          <Link
                            linkTo='/strategies-signals'
                            className='button primary'
                            fullWidth
                          >
                            <b>View All</b>
                          </Link>
                        </li>
                        {filterProducts('strategy').map((strat) => (
                          <li key={strat.id}>
                            <Link linkTo={`/product/${strat.slug}`} type='nav'>
                              {strat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        <li>
                          <b className='fs-400'>Signals</b>
                        </li>
                        <li>
                          <Link
                            linkTo='/strategies-signals'
                            className='button primary'
                            fullWidth
                          >
                            <b>View All</b>
                          </Link>
                        </li>
                        {filterProducts('signal').map((strat) => (
                          <li key={strat.id}>
                            <Link linkTo={`/product/${strat.slug}`} type='nav'>
                              {strat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                }
              >
                Signals & Strategies
              </Link>
            </li>
            <li>
              <Link linkTo='/support' type='nav'>
                OnBoarding & Support
              </Link>
            </li>

            <li>
              <Link linkTo='/articles' type='nav'>
                News
              </Link>
            </li>
            <li>
              <Link linkTo='/about' type='nav'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .burger {
          width: 2rem;
          height: 0.25rem;
          border-radius: 10px;
          background-color: rgb(250, 249, 246);
          transform-origin: 1px;
          transition: all 0.3s linear;
        }
        .burger1 {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .burger2 {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
        @media (max-width: 960px) {
          .navLinks {
            display: ${isOpen ? 'block' : 'none'};
            background-color: #07121d;
            height: 100vh;
            width: 42vw;
            position: absolute;
            right: 0;
          }
        }
      `}</style>
    </>
  )
}
