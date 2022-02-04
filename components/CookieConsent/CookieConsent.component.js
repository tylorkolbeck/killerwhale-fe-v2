import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'
import styles from './CookieConsent.module.scss'

function CookieConsentPopUp() {
  return (
    <div className={styles.cookieWrapper}>
      <CookieConsent
        location='bottom'
        buttonText=' OK '
        style={{
          background: 'rgba(105,105,105, 0.75)',
          borderRadius: '25px',
          left: 'none',
          margin: '15px',
          zIndex: '100',
          padding: '25px',
          maxWidth: '400px',
          fontSize: '13px'
        }}
        buttonStyle={{
          background: '#24ae90',
          borderRadius: '15px',
          fontSize: '13px',
          color: 'white'
        }}
      >
        <h2>Cookie Consent</h2>
        We use cookies to provide and improve our services. By continuing to use
        our site you consent to cookies. Read more on our{' '}
        <Link href='/privacy-policy'>
          <a style={{ textDecoration: 'underline', color: 'white' }}>
            privacy policy
          </a>
        </Link>{' '}
        and{' '}
        <Link href='/cookie-policy'>
          <a style={{ textDecoration: 'underline', color: 'white' }}>
            cookie policy
          </a>
        </Link>
        .{' '}
      </CookieConsent>
    </div>
  )
}

export default CookieConsentPopUp
