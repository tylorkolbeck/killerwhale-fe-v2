import Button from '../components/Button/Button.component'
import Divider from '../components/Divider/Divider.component'
import InfoBar from '../components/InfoBar/InfoBar.component'
import Bios from '../components/Bios/Bios.component'
import SectionHeader from '../components/SectionHeader/SectionHeader.component'

export default function about() {
  return (
    <div>
      <div className='hero v-align-c'>
        <section className='section flow'>
          <h1 className='fs-700 uppercase ff-good center'>We Have Strategy</h1>
          <div className='center flex'>
            <Divider width='200px'></Divider>
          </div>
          <p className='center'>
            We understand the market conditions, and we don't let emotions cloud
            our judgement. We help you look for the optimum time to buy and sell
            - in summary, we have strategy!
          </p>
        </section>
      </div>
      <section className='section bg-dark grid flow'>
        <div className='flow'>
          <h3 className='fs-600 uppercase ffgood'>The Killer Whale Story</h3>
          <Divider width='200px'></Divider>
        </div>
        <div>
          <p className='mb-4'>
            Established in 2019, Killer Whale is the brainchild of Dylan
            Shively, an experienced trader, software engineer and entrepreneur.
            Being an early adopter of crypto, Dylan saw a flood of new traders
            enter the market, some made it big, others lost everything. What
            sets the good traders apart from the bad traders? They understood
            the market conditions, did not let emotions cloud their judgement
            and looked for the optimum time to buy and sell - in summary they
            had a strategy! Dylan created Killer Whale as a way for new traders
            to have access to the same skills and strategies of an experienced
            trader, leveling the playing field. Killer Whale gives everyone
            access to robotic trading utilising advanced AI. One of the benefits
            of AI Trading is that experienced traders create the strategies for
            you, monitoring different indicators and trend analysis, giving you
            years of experience at your disposal buying in the dips and selling
            at the top. You decide when to take profit, arm trailing stop loss
            based on your comfort level.
          </p>
          <p>
            Killer Whale have designed various strategies and signals for any
            investment type, comfort level and trading frequency.So no matter if
            you are a shrimp or a killer whale, we have a strategy that will
            help you grow your crypto portfolio. We are the most downloaded
            strategy on Cryptohopper and have a 4+ star rating on the market
            place. Connect to your exchange, select your strategy, configure
            your hopper and swim with the whales.
          </p>
        </div>
      </section>
      <InfoBar
        text={'Are you ready to join the Killer Whale Pod?'}
        button={
          <Button type='ctaInverted' inverted>
            Getting Started
          </Button>
        }
      />
      <div className='section flex center'>
        <SectionHeader header='Our Team' />
      </div>
      <Bios />

      <section className='section'>
        <div>
          <h3>What sets the good traders apart from the bad?</h3>
          <Divider width='200px' />
        </div>
        <div>
          <p>
            They understood the market conditions, did not let emotions cloud
            their judgement and looked for the optimum time to buy and sell - in
            summary they had a strategy!
          </p>
        </div>
      </section>
    </div>
  )
}
