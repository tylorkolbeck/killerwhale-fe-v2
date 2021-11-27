import SectionHeader from '../components/SectionHeader/SectionHeader.component'
import TypeOfTrader from '../sections/TypeOfTrader/TypeOfTrader.component'

export default function StrategiesSignals() {
  return (
    <div>
      <div className='v-align-c hero'>
        <div>
          <SectionHeader
            header='Strategies & Signals'
            subText='Killer Whale has  hand picked the best strategies and signals based on your trading experience. To get started select your trading experience below.'
            hSize='l'
            center
          />
          <section className='section center text-green'>
            <div>
              <p className='bold fs-500'>
                Voted #1 Strategy and Signal Provider On Cryptohopper!
              </p>
            </div>
          </section>
        </div>
      </div>

      <div>
        <div className='mt-5'>
          <TypeOfTrader />
        </div>
      </div>
    </div>
  )
}
