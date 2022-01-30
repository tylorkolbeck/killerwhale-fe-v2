import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from '../Link/Link.component'
import styles from './Markdown.module.scss'
import { getStrapiMedia } from '../../utils/media'
import rehypeRaw from 'rehype-raw'
import { fetchAPI } from '../../lib/api'

import ProductCard from '../ProductCard/ProductCard.component'
import reactDom from 'react-dom'

const customComponentDataFetcher = {
  product: async (elementId, dataUrl) => {
    fetchAPI(dataUrl, (data) => {
      if (data) {
        let productData = data[0]
        let element = document.getElementById(elementId)

        if (productData) {
          reactDom.render(
            <div
              style={{
                margin: '2rem auto',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <ProductCard
                name={productData?.name}
                type={productData?.type}
                tradeDuration={productData?.tradeDuration}
                tradeFreq={productData?.tradeFreq}
                experience={productData?.experience}
              />
            </div>,
            element
          )
        }
      }
    })
  }
}

export default function Markdown({ children }) {
  function renderCustomInput(node) {
    try {
      let componentType = node?.properties?.className[0]?.split('-')[1]
      let dataUrl = node?.children[0]?.value?.replace(/[\n\r\t\s]+/g, '').trim()
      customComponentDataFetcher[componentType](
        `${componentType}_${dataUrl}`,
        `/products-v-2-s?slug=${dataUrl}`
      )

      return <div id={`${componentType}_${dataUrl}`}></div>
    } catch (error) {
      console.log('Error getting custom inline component', error)
    }
  }

  const components = {
    p: ({ children }) => {
      return (
        <p style={{ lineHeight: '2rem', marginBottom: '1rem' }}>{children}</p>
      )
    },
    h1: ({ children }) => {
      return <h1 className={'ff-good fs-700'}>{children}</h1>
    },
    h2: ({ children }) => {
      return <h2 className={'ff-good fs-600'}>{children}</h2>
    },
    h3: ({ children }) => {
      return <h3 className={'ff-good fs-500'}>{children}</h3>
    },
    h4: ({ children }) => {
      return <h4 className={'ff-good fs-400'}>{children}</h4>
    },
    h5: ({ children }) => {
      return <h5 className={'ff-good fs-300'}>{children}</h5>
    },
    h6: ({ children }) => {
      return <h6 className={'ff-good fs-200'}>{children}</h6>
    },
    a: ({ href, children }) => {
      return (
        <Link linkTo={href} newTab={true}>
          {children}
        </Link>
      )
    },
    code: ({ node }) => {
      return <div>{renderCustomInput(node)}</div>
    },
    img: (props) => {
      return (
        <span className={styles.imageWrapper}>
          <img src={getStrapiMedia(props.src)} alt={props.alt} />
        </span>
      )
    }
  }

  return (
    <div>
      <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
