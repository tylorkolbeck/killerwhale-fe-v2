import '../styles/globals.scss'
import '../styles/utilities.scss'
import '../styles/typography.css'
import '../styles/reset.css'

import GlobalLayout from '../layouts/global/global.layout.component'
import DefaultLayout from '../components/layouts/DefaultLayout'
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TKHK54R' })
  }, [])
  const Layout = Component.Layout || DefaultLayout
  return (
    <GlobalLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalLayout>
  )
}

export default MyApp
