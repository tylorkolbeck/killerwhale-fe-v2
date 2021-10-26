import Button from '../components/Button/Button.component'
import Link from '../components/Link/Link.component'

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
              <p className='text-accent'>
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className='fs-900 uppercase ff-good'>Earth</p>
            </div>
            <div>
              <p className='text-accent'>
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className='fs-800 uppercase ff-good'>Venus</p>
            </div>
            <div>
              <p className='text-accent'>
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className='fs-700 uppercase ff-good'>Jupiter & Saturn</p>
            </div>
            <div>
              <p className='text-accent'>
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className='fs-600 uppercase ff-good'>
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className='text-accent'>
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className='text-accent fs-500 uppercase ff-serif letter-spacing-1'>
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div
            className='flow'
            style={{ flexBasis: '100%', '--flow-space': '4rem' }}
          >
            <div>
              <p className='text-accent'>
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className='fs-500 ff-serif uppercase'>384,400 km</p>
            </div>
            <div>
              <p className='text-accent'>
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className='fs-200 uppercase ff-serif letter-spacing-3'>
                Avg. Distance
              </p>
            </div>
            <div>
              <p className='text-accent'>
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className='fs-300 uppercase ff-serif letter-spacing-2'>
                Europa
              </p>
            </div>
            <div>
              <p className='text-accent'>Body Text</p>
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
          <p className='text-accent'>fullWidth: true | false</p>
          <p className='text-accent'>
            type: cta | contained(default) | secondary
          </p>
          <p className='text-accent'>iconStart: IconComponent</p>
          <p className='text-accent'>
            iconEnd: IconComponent(default arrow for cta)
          </p>
          <p className='text-accent'>onClick: function</p>
          <p className='text-accent'>children: any</p>
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
          <p className='text-accent'>type: nav | navSub | link(default) </p>
          <p className='text-accent'>iconStart: IconComponent</p>
          <p className='text-accent'>iconEnd: IconComponent</p>
          <p className='text-accent'>linkTo: url</p>
          <p className='text-accent'>children: string | ul</p>
          <p className='text-accent'>active: boolean</p>
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
              <Link linkTo='/design'>Click Me</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Styles
