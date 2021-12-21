import React, { useState, useEffect } from 'react'
import styles from './ArticlesLayout.module.scss'
import Link from '../Link/Link.component'
import SectionHeader from '../SectionHeader/SectionHeader.component'
import { fetchAPI } from '../../lib/api'
import { strategies } from '../../data/strategies'
import ProductCard from '../ProductCard/ProductCard.component'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'

export default function ArticleLayout({ children }) {
  const [categories, setCategories] = useState(null)
  const router = useRouter()

  useEffect(async () => {
    const categories = await fetchAPI('/categories')
    const cats = []

    categories.forEach(({ id, name, slug, articles }) => {
      if (articles.length > 0) {
        cats.push({ id, name, slug })
      }
    })

    setCategories(cats)
  }, [])
  return (
    <div className='mt-2'>
      <div className='container'>
        <div className={styles.grid}>
          <div>{children}</div>
          <div className={styles.sideBar}>
            <div className={styles.promo}>
              <SectionHeader header='Start Trading'>
                Want to get started in automated crypto trading? Check out
                Killer Whale's top earning strategies
              </SectionHeader>
              <div className={clsx('flow mt-2', styles.strategies)}>
                {strategies.slice(0, 4).map((strat) => (
                  <div
                    onClick={() => router.push(`/product/${strat.slug}`)}
                    className={styles.productCardLink}
                    key={strat.id}
                  >
                    <ProductCard
                      key={strat.id}
                      name={strat.name}
                      tradeDuration={strat.tradeDuration}
                      tradeFreq={strat.tradeFreq}
                      type={strat.type}
                      mini
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-4'>
              <SectionHeader header='Categories' />
              <div className={styles.tags}>
                {categories ? (
                  categories.map((cat) => {
                    return (
                      <Link linkTo={`/category/${cat.slug}`} key={cat.id}>
                        <span>{cat.name}</span>
                      </Link>
                    )
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
