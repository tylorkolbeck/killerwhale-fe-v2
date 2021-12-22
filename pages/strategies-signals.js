import TypeOfTrader from '../sections/TypeOfTrader/TypeOfTrader.component'
import NewsLetterSignup from '../sections/NewsLetterSignup/NewsLetterSignup.component'
import Divider from '../components/Divider/Divider.component'
import { fetchAPI } from '../lib/api'

export default function StrategiesSignals({ products }) {
  return (
    <div>
      <div className='container'>
        <h1 className='ff-good mt-3 center'>Signals And Strategies</h1>
        <div className='grid center mt-2'>
          <Divider width='200px' />
        </div>
      </div>

      <div>
        <div className='mt-5'>
          <TypeOfTrader products={products} />
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
  return {
    props: {
      products
    },
    revalidate: 1
  }
}
