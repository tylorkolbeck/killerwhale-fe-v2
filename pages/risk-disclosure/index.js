import React from 'react'
import Markdown from '../../components/Markdown/Markdown.component'
import { fetchAPI } from '../../lib/api'

export default function RiskDisclosure({ riskDisclosure }) {
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
        {riskDisclosure[0]?.pageContent[0]?.sectionName}
      </h1>

      <Markdown>{riskDisclosure[0]?.pageContent[0]?.content}</Markdown>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel

  const riskDisclosure = await fetchAPI('/pages?pageName=risk-disclosure')

  return {
    props: { riskDisclosure: riskDisclosure },
    revalidate: 1
  }
}
