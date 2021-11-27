import Button from '../components/Button/Button.component'
import InfoBar from '../components/InfoBar/InfoBar.component'
import Bios from '../components/Bios/Bios.component'
import SectionHeader from '../components/SectionHeader/SectionHeader.component'

export default function about() {
  return (
    <div>
      <div className='hero v-align-c'>
        <SectionHeader
          header='We Have Strategy'
          subText="We understand the market conditions, and we don't let emotions cloud
            our judgement. We help you look for the optimum time to buy and sell
            - in summary, we have strategy!"
          center
        />
      </div>
      <div className='bg-light logoBg' style={{ position: 'relative' }}>
        <section className='section container grid flow c1-c2 v-align-c'>
          <div>
            <SectionHeader header='The Killer Whale Story' />
          </div>

          <div>
            <p>
              Established in 2019, Killer Whale is the brainchild of Dylan
              Shively, an experienced trader, software engineer and
              entrepreneur. Being an early adopter of crypto, Dylan saw a flood
              of new traders enter the market, some made it big, others lost
              everything. What sets the good traders apart from the bad traders?
              They understood the market conditions, did not let emotions cloud
              their judgement and looked for the optimum time to buy and sell -
              in summary they had a strategy! Dylan created Killer Whale as a
              way for new traders to have access to the same skills and
              strategies of an experienced trader, leveling the playing field.
              Killer Whale gives everyone access to robotic trading utilising
              advanced AI. One of the benefits of AI Trading is that experienced
              traders create the strategies for you, monitoring different
              indicators and trend analysis, giving you years of experience at
              your disposal buying in the dips and selling at the top. You
              decide when to take profit, arm trailing stop loss based on your
              comfort level.
            </p>
            <br />

            <p>
              Killer Whale have designed various strategies and signals for any
              investment type, comfort level and trading frequency.So no matter
              if you are a shrimp or a killer whale, we have a strategy that
              will help you grow your crypto portfolio. We are the most
              downloaded strategy on Cryptohopper and have a 4+ star rating on
              the market place. Connect to your exchange, select your strategy,
              configure your hopper and swim with the whales.
            </p>
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
