import styles from './about.module.scss'
import InfoBar from '../../components/InfoBar/InfoBar.component'
import Bios from '../../components/Bios/Bios.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import { fetchAPI } from '../../lib/api'
import Markdown from '../../components/Markdown/Markdown.component'

export default function about({ pageData }) {
  const pageHeader = pageData[0]?.contentBody

  return (
    <div>
      <NextSeo
        title='About'
        description='KillerWhaleCrypto focuses on cryptocurrency trading and automated trading bots. We discuss and educate on chart patterns, technical analysis for various crypto like bitcon (BTC), Ethereum (ETH) and altcoins.
        Join us today and CHANGE THE WAY YOU TRADE'
      />
      <div className='hero'>
        <div className={clsx('container', styles.header)}>
          <div>
            <SectionHeader
              header='The People Behind Killer Whale'
              subText='
              Our vision is to become the world’s most innovative company in
              crypto trading.'
              // subText='Our mission is to give everyone equal access to state of the art trading tools & technologies to transform your crypto trading experience. '
            />
          </div>
          <div>
            {pageHeader && <Markdown>{pageData[0].contentBody}</Markdown>}
          </div>
        </div>
      </div>
      <InfoBar
        quote='Our mission is to give everyone equal access to state of the art trading tools & technologies to transform your crypto trading experience.'
        text={
          'Our mission is to give everyone equal access to state of the art trading tools & technologies to transform your crypto trading experience.'
        }
        bold
      />
      <div className='bg-light logoBg' style={{ position: 'relative' }}></div>
      <div className='flex center mt-4'>
        <SectionHeader header='Meet Our Team' center />
      </div>
      <div className='mb-4'>
        <Bios />
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const aboutData = await fetchAPI('/pages?pageName=about')
  return {
    props: {
      pageData: aboutData[0].pageContent,
      revalidate: 10
    }
  }
}
