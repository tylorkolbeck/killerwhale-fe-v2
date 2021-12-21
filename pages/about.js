import Button from '../components/Button/Button.component'
import InfoBar from '../components/InfoBar/InfoBar.component'
import Bios from '../components/Bios/Bios.component'
import SectionHeader from '../components/SectionHeader/SectionHeader.component'

export default function about() {
  return (
    <div>
      <div className='hero v-align-c'>
        <SectionHeader
          header='The People Behind Killer Whale'
          subText='Our mission is to give everyone equal access to state of the art trading tools & technologies to transform your crypto trading experience. '
          center
        />
      </div>
      <div className='bg-light logoBg' style={{ position: 'relative' }}>
        <section className='section container grid flow c1-c2 v-align-c'>
          <div>
            <SectionHeader header='The Killer Whale Story'>
              Our vision is to become the world’s most innovative company in
              crypto trading.{' '}
            </SectionHeader>
          </div>

          <div>
            <p>
              Built from humble beginnings Killer Whale is the enabler to start
              your journey into the world of AI driven automated trading. Now,
              we’re one of the largest names in automated crypto trading and top
              downloaded on Cryptohopper. We exist to demystify the world of
              crypto and enhance your trading experience.
            </p>
            <br />

            <p>
              Our Team of innovators and entrepreneurs come from diverse
              backgrounds but share the experience of being early crypto
              adopters and developers.
            </p>
            <p>
              Our future roadmap encompasses projects in NFT, Mining, DeFi. We
              will continue to drive innovation and customer experience as we
              diversify into emerging technologies.
            </p>

            <p>Perhaps the mans best friend is truly a Killer Whale</p>
          </div>
        </section>
      </div>
      <div className='section flex center'>
        <SectionHeader header='Our Team' center />
      </div>
      <div className='mb-4'>
        <Bios />
      </div>

      <InfoBar
        text={'Are you ready to join the Killer Whale Pod?'}
        button={
          <Button type='ctaInverted' inverted>
            Getting Started
          </Button>
        }
      />

      {/* <section className='section flex center bg-light'>
        <SectionHeader
          header='What sets the good traders apart from the bad?'
          subText='They understood the market conditions, did not let emotions cloud
            their judgement and looked for the optimum time to buy and sell - in
            summary they had a strategy!'
          center
        />
      </section> */}
    </div>
  )
}
