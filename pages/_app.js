import '../styles/globals.scss'
import '../styles/utilities.scss'
import '../styles/typography.css'
import '../styles/reset.css'

import { useEffect } from 'react'
import GlobalLayout from '../layouts/global/global.layout.component'
import DefaultLayout from '../components/layouts/DefaultLayout'
import TagManager from 'react-gtm-module'
import CookieConsentPopUp from '../components/CookieConsent/CookieConsent.component'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TKHK54R' })
  }, [])
  const Layout = Component.Layout || DefaultLayout
  return (
    <>
      <CookieConsentPopUp></CookieConsentPopUp>
      <GlobalLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalLayout>
    </>
  )
}

export default MyApp
