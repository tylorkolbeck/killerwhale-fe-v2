// Components
import Button from '../components/Button/Button.component'
import Link from '../components/Link/Link.component'
import List from '../components/List/List.component'
import Testimonial from '../components/Testimonial/Testimonial.component'
import ProductCard from '../components/ProductCard/ProductCard.component'

function Styles() {
  return (
    <div className='container'>
      <h1 className='ff-good'>Design System</h1>

      {/* -- Colors -- */}
      <section id='colors' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>01</span> colors
        </h2>
        {/* Dark */}
        <div className='flex'>
          <div style={{ flexGrow: 1 }}>
            <div
              className='bg-dark'
              style={{
                padding: '3rem 1rem 1rem',
                border: '1px solid #eeeeee92'
              }}
            >
              #06101A
            </div>
            <p>
              <span className='text-accent'>RGB</span> 6 26 36
            </p>
            <p>
              <span className='text-accent'>HSL</span> 210 77% 10%
            </p>
          </div>

          {/* Light */}
          <div style={{ flexGrow: 1 }}>
            <div
              className='bg-dark text-white bg-light'
              style={{
                padding: '3rem 1rem 1rem',
                border: '1px solid #eeeeee92'
              }}
            >
              #081829
            </div>
            <p>
              <span className='text-accent'>RGB</span> 8 24 41
            </p>
            <p>
              <span className='text-accent'>HSL</span> 211 80% 16%
            </p>
          </div>

          {/* Green */}
          <div style={{ flexGrow: 1 }}>
            <div
              className='bg-dark text-white bg-green'
              style={{
                padding: '3rem 1rem 1rem',
                border: '1px solid #eeeeee92'
              }}
            >
              #24AE8F
            </div>
            <p>
              <span className='text-accent'>RGB</span> 36 174 143
            </p>
            <p>
              <span className='text-accent'>HSL</span> 167 79% 68%
            </p>
          </div>
        </div>
      </section>

      {/*  -- Typography -- */}
      <section id='typography' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>02 </span>Typography
        </h2>
        <div className='flex'>
          <div
            className='flow'
            style={{ flexBasis: '100%', '--flow-space': '4rem' }}
          >
            <div>
              <p className='text-accent'>Heading 1 - Good Times - 150px</p>
              <p className='fs-900 uppercase ff-good'>Earth</p>
            </div>
            <div>
              <p className='text-accent'>Heading 2 - Good Times - 100px</p>
              <p className='fs-800 uppercase ff-good'>Venus</p>
            </div>
            <div>
              <p className='text-accent'>Heading 3 - Good Times - 56px</p>
              <p className='fs-700 uppercase ff-good'>Jupiter & Saturn</p>
            </div>
            <div>
              <p className='text-accent'>Heading 4 - Good Times - 32px</p>
              <p className='fs-600 uppercase ff-good'>
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className='text-accent'>
                Heading 5 - Montserrat - 28px - 2.35px Character Space
              </p>
              <p className='text-accent fs-500 uppercase ff-serif letter-spacing-3'>
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div
            className='flow'
            style={{ flexBasis: '100%', '--flow-space': '4rem' }}
          >
            <div>
              <p className='text-accent'>Subheading 1 - Montserrat - 28px</p>
              <p className='fs-500 ff-serif uppercase'>384,400 km</p>
            </div>
            <div>
              <p className='text-accent'>
                Subheading 2 - Montserrat Regular - 14px - 2.35 Character Space
              </p>
              <p className='fs-200 uppercase ff-serif letter-spacing-3'>
                Avg. Distance
              </p>
            </div>
            <div>
              <p className='text-accent'>
                Nav Text - Montserrat Regular - 16px - 2.7 Character Space
              </p>
              <p className='fs-300 uppercase ff-serif letter-spacing-2'>
                Europa
              </p>
            </div>
            <div>
              <p className='text-accent'>Body Text - Montserrat - 18px </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Buttons -- */}
      <section id='buttons' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>03 </span>Buttons
        </h2>
        <div
          className='flow'
          style={{ border: '1px solid #eeeeee92', padding: '1rem 1rem 1rem' }}
        >
          <h4 className='fs-600 uppercase ff-good'>Props:</h4>
          <p>fullWidth: true | false</p>
          <p>type: cta | contained(default) | secondary</p>
          <p>iconStart: IconComponent</p>
          <p>iconEnd: IconComponent(default arrow for cta)</p>
          <p>onClick: function</p>
          <p>children: any</p>
        </div>
        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Call To Action</p>
            <div>
              <Button type='cta'>Click Me</Button>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Primary</p>
            <div>
              <Button type='contained'>Click Me</Button>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Secondary</p>
            <div>
              <Button type='outlined'>Click Me</Button>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Full Width</p>
            <div>
              <Button fullWidth>Click Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* -- Links -- */}
      <section id='links' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>04 </span>Links
        </h2>
        <div
          className='flow'
          style={{ border: '1px solid #eeeeee92', padding: '1rem 1rem 1rem' }}
        >
          <h4 className='fs-600 uppercase ff-good'>Props:</h4>
          <p>type: nav | navSub | link(default) </p>
          <p>iconStart: IconComponent</p>
          <p>iconEnd: IconComponent</p>
          <p>linkTo: url</p>
          <p>children: string | ul</p>
          <p>active: boolean</p>
        </div>
        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Nav Link</p>
            <div>
              <Link linkTo='/design' type='nav'>
                Click Me
              </Link>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Nested Nav Links</p>
            <div>
              <Link
                type='nav'
                subLinks={
                  <ul className='flow'>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                }
              >
                Click Me
              </Link>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Link Active</p>
            <div>
              <Link type='nav' active linkTo='/design'>
                Click Me
              </Link>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Inline Link</p>
            <div>
              <Link linkTo='/design'>
                <p>Click Me</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -- Lists -- */}
      <section id='lists' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>05 </span>Lists
        </h2>
        <div
          className='flow'
          style={{ border: '1px solid #eeeeee92', padding: '1rem 1rem 1rem' }}
        >
          <h4 className='fs-600 uppercase ff-good'>Props:</h4>
          <p>children: ul</p>
        </div>
        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Unordered List</p>
            <div>
              <List items={['item 1', 'item 2', 'item 3', 'item 4']}></List>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Unordered List</p>
            <div>
              <h4>Needs to be implemented</h4>
            </div>
          </div>
        </div>
      </section>

      {/* -- Forms -- */}
      <section id='forms' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>06 </span>Form Inputs
        </h2>
        {/* <div
          className='flow'
          style={{ border: '1px solid #eeeeee92', padding: '1rem 1rem 1rem' }}
        >
          <h4 className='fs-600 uppercase ff-good'>Props:</h4>
        </div> */}
        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Text Input</p>
            <div style={{ maxWidth: 300 }}>
              <label htmlFor='input' className='grid'>
                Input Label
                <input type='text' name='input' placeholder='Placeholder...' />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* -- Testimonial -- */}
      <section id='testimonial' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>07 </span>Testimonial
        </h2>
        <div
          className='flow'
          style={{ border: '1px solid #eeeeee92', padding: '1rem 1rem 1rem' }}
        >
          <h4 className='fs-600 uppercase ff-good'>Props:</h4>
          <p>description: string </p>
          <p>strategy: string </p>
          <p>startBal: string</p>
          <p>profit: string</p>
          <p>name: string</p>
          <p>strategyCard: Component StrategyCard </p>
        </div>
        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Testimonial Card</p>
            <div
              className='bg-light'
              style={{ padding: '1rem', maxWidth: 600, borderRadius: 4 }}
            >
              <Testimonial
                description='Testimonial goes here. Only four days trading with KW. My profits have significantly increased. Couldn’t be happier.'
                strategy='Gain BTC'
                startBal='$2,000 USD'
                profit='$2,000 USD (100%)'
                name='Fred Durst'
                strategyCard={
                  <ProductCard
                    name='GAIN BTC '
                    type='strategy'
                    tradeDuration={0}
                    tradeFreq={50}
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- Product Card -- */}
      <section id='product-card' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>08 </span>Product Card
        </h2>
        <div
          className='flow'
          style={{ border: '1px solid #eeeeee92', padding: '1rem 1rem 1rem' }}
        >
          <h4 className='fs-600 uppercase ff-good'>Props:</h4>
          <p>name: string</p>
          <p>type: string</p>
          <p>tradeDuration: num (0 | 50 | 100)</p>
          <p>tradeFreq: num (0 | 50 | 100)</p>
        </div>
        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Product Card</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <ProductCard
                name='GAIN BTC '
                type='strategy'
                tradeDuration={0}
                tradeFreq={50}
              />
              <ProductCard
                name='GAIN BTC LONGER'
                type='strategy'
                tradeDuration={100}
                tradeFreq={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- Misc -- */}
      <section id='misc' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>09 </span>Misc
        </h2>

        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Chips</p>
            <div className='flex'>
              <h4>Not Implemented</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Assets */}
      <section id='product-card' style={{ margin: '4rem 0' }} className='flow'>
        <h2 className='numbered-title'>
          <span>10 </span>Assets
        </h2>

        <div className='flex'>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Logo</p>
            <div className='flex'>
              <h4>Not Implemented</h4>
            </div>
          </div>
          <div style={{ flexGrow: 1 }} className='flow'>
            <p className='text-accent'>Experience Level Chips</p>
            <div className='flex'>
              <h4>Not Implemented</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Styles
