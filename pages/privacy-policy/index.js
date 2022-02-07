import React from 'react'
import Markdown from '../../components/Markdown/Markdown.component'
import { fetchAPI } from '../../lib/api'

export default function PrivacyPolicy({ privacyPolicy }) {
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
        {privacyPolicy[0]?.pageContent[0]?.sectionName}
      </h1>
      <Markdown>{privacyPolicy[0]?.pageContent[0]?.content}</Markdown>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel

  const privacyPolicy = await fetchAPI('/pages?pageName=privacy-policy')

  return {
    props: { privacyPolicy: privacyPolicy },
    revalidate: 1
  }
}
