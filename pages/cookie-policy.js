import React from 'react'
import ReactMarkdown from 'react-markdown'
import { fetchAPI } from '../lib/api'

export default function CookiePolicy({ cookiePolicy }) {
  const renderers = {
    link: (props) => {
      return <p>{props.children[0].props.children}</p>
    }
  }
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        paddingTop: '100px'
      }}
    >
      <ReactMarkdown renderers={renderers} source={cookiePolicy} />
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel

  const cookiePolicy = await fetchAPI('/cookie-policy')

  return {
    props: { cookiePolicy: cookiePolicy ? cookiePolicy.policy : '' },
    revalidate: 1
  }
}
