import TypeOfTrader from '../sections/TypeOfTrader/TypeOfTrader.component'
import NewsLetterSignup from '../sections/NewsLetterSignup/NewsLetterSignup.component'
import Divider from '../components/Divider/Divider.component'
import { fetchAPI } from '../lib/api'
import { NextSeo } from 'next-seo'

export default function StrategiesSignals({ products, pageData }) {
  return (
    <div>
      <NextSeo
        title='Strategies and Signals'
        description='KillerWhaleCrypto focuses on cryptocurrency trading and automated trading bots. We discuss and educate on chart patterns, technical analysis for various crypto like bitcon (BTC), Ethereum (ETH) and altcoins.
        Join us today and CHANGE THE WAY YOU TRADE'
      />
      <div className='container'>
        <h1 className='ff-good mt-3 center'>Signals And Strategies</h1>
        <div className='grid center mt-2'>
          <Divider width='200px' />
        </div>
      </div>

      <div>
        <div className='mt-5'>
          <TypeOfTrader products={products} pageData={pageData} />
        </div>
      </div>
      <section className='section bg-light mt-5'>
        <div className='container'>
          <NewsLetterSignup />
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const products = await fetchAPI(`/products-v-2-s`)
  const pageData = await fetchAPI('/pages?pageName=products')

  return {
    props: {
      products,
      pageData
    },
    revalidate: 1
  }
}
