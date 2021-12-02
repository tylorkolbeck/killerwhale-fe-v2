import clsx from 'clsx'
import Button from '../../components/Button/Button.component'
import ProductRow from '../../components/ProductTable/ProductRow/ProductRow.component'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'

const productDummy = {
  name: 'GAIN BTC',
  type: 'Strategy',
  tradeDuration: '50',
  tradeFreq: '50',
  startingBalance: [
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $10,000',
    '$10,000+'
  ],
  plans: ['Explorer', 'Adventurer']
}

export default function product() {
  return (
    <div>
      <div className={clsx('container flow')}>
        <h2 className='ff-good fs-700 mt-3'>GAIN BTC</h2>

        <div>
          <div className='mt-2'>
            <ProductRow product={productDummy} />
          </div>
        </div>
        {/* <div>
        <Divider />
      </div> */}
        <div>
          <div className='mt-4'>
            <SectionHeader header='Description' hSize='s'>
              <p>
                If you are an inexperienced trader or a whale wanting to grow
                your returns, Gain BTC is for you. The only Strategy on
                Cryptohopper to be triggered by hand, Premium Signals by Killer
                Whale lets you take advantage of Years of trading experience.
              </p>
              <p>
                Take the emotion out of your trading and let the best in the
                business take care of your trading for Killer Whale Premium
                signal, exclusive to Cryptohopper.
              </p>
            </SectionHeader>
          </div>
        </div>
        <div>
          <div className='mt-3'>
            <Button>Get Strategy</Button>
          </div>
        </div>
        <div>
          <div className='mt-4'>
            <SectionHeader header='Need Help?' hSize='s'>
              <p>
                Not sure where to get started? We have setup guides, a large
                community, live chat, as well as a support team that is here to
                answer any questions you have.
              </p>
            </SectionHeader>
          </div>
          <div className='mt-3'>
            <Button>Getting Started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
