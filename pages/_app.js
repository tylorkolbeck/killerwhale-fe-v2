import '../styles/globals.scss'
import '../styles/utilities.scss'
import '../styles/typography.css'
import '../styles/reset.css'

import GlobalLayout from '../layouts/global/global.layout.component'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}

export default MyApp
