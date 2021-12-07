import React from 'react'
import styles from './ArticlesLayout.module.scss'

export default function ArticleLayout({ children }) {
  return (
    <>
      <div className='container'>
        <div className={styles.grid}>
          <div>{children}</div>
          <div className={styles.sideBar}>
            sidebar: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sint quibusdam cumque vel, autem aliquid nulla iste tempora
            repudiandae nobis, corporis excepturi animi impedit. Veniam quidem
            incidunt inventore non! Dolor, dignissimos? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate, culpa! Excepturi
            voluptas quidem blanditiis expedita, ea officia nesciunt! Excepturi
            repellendus at neque cum labore cumque numquam, sapiente cupiditate
            magnam soluta. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aperiam iure perspiciatis dolorum perferendis doloribus
            nesciunt consequuntur, error qui. Totam sint earum aut facilis
            aspernatur provident voluptas. Fuga libero fugit quae.
          </div>
        </div>
        <div className={styles.bottomPromo}>Promo</div>
      </div>
    </>
  )
}
