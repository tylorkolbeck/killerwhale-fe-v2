import '../styles/globals.scss'
import '../styles/utilities.scss'
import '../styles/typography.css'
import '../styles/reset.css'

import GlobalLayout from '../layouts/global/global.layout.component'
import DefaultLayout from '../components/layouts/DefaultLayout'

function MyApp({ Component, pageProps }) {
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
