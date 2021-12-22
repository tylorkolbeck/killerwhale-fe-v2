import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from '../Link/Link.component'
import styles from './Markdown.module.scss'
import { getStrapiMedia } from '../../utils/media'
import rehypeRaw from 'rehype-raw'

export default function Markdown({ children }) {
  function renderCustomInput(input) {
    console.log('rendering input', input)
  }
  const components = {
    p: ({ children }) => {
      return <p style={{ lineHeight: '2rem' }}>{children}</p>
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
      renderCustomInput(node?.children[0]?.value?.split('\n'))
      return <div id={'asd'} className={styles.coinList}></div>
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
