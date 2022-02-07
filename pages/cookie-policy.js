import React from 'react'
import Markdown from '../components/Markdown/Markdown.component'
import { fetchAPI } from '../lib/api'

export default function CookiePolicy({ cookiePolicy }) {
  console.log(cookiePolicy)
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        paddingTop: '100px'
      }}
    >
      <h1 className='ff-good fs-500 mb-2'>
        {cookiePolicy[0]?.pageContent[0]?.sectionName}
      </h1>
      <Markdown>{cookiePolicy[0]?.pageContent[0]?.content}</Markdown>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel

  const cookiePolicy = await fetchAPI('/pages?pageName=cookie-policy')

  return {
    props: { cookiePolicy: cookiePolicy },
    revalidate: 1
  }
}
