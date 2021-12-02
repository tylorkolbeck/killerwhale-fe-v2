import TypeOfTrader from '../sections/TypeOfTrader/TypeOfTrader.component'
import NewsLetterSignup from '../sections/NewsLetterSignup/NewsLetterSignup.component'
import Divider from '../components/Divider/Divider.component'

export default function StrategiesSignals() {
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
          <TypeOfTrader />
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
