import React from 'react'
import styles from './ArticlesLayout.module.scss'
import Link from '../Link/Link.component'

export default function ArticleLayout({ children }) {
  return (
    <>
      <div className='container'>
        <div className={styles.grid}>
          <div>{children}</div>
          <div className={styles.sideBar}>
            <h1>Promoting Products:</h1>
          </div>
        </div>
        <div className={styles.bottomPromo}>Promo</div>
        <div className={styles.toTop}>
          <Link type='nav' linkTo='#'>
            Back to top
          </Link>
        </div>
      </div>
    </>
  )
}
