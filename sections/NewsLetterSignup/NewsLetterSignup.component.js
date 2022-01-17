import { useState } from 'react'
import styles from './NewsLetterSignup.module.scss'
import Button from '../../components/Button/Button.component'
import Link from '../../components/Link/Link.component'
import clsx from 'clsx'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import Spinner from '../../components/Spinner/Spinner.component'
import { fetchAPI } from '../../lib/api'
import axios from 'axios'

export default function NewsLetterSignup() {
  const [formState, setFormState] = useState({
    value: '',
    error: '',
    success: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const postNewsletterEmail = (email) => {
    return axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/newsletter`, {
      email: email
    })
  }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault()
  //   setErrorMsg(null)
  //   setLoading(true)
  //   if (validateEmail(email)) {
  //     postNewsletterEmail(email)
  //       .then((res) => {
  //         setEmail('')
  //         setLoading(false)
  //         setSuccessMsg(true)
  //         setHidden(true)
  //       })
  //       .catch((error) => {
  //         setLoading(false)
  //         setErrorMsg(error.message)
  //       })
  //   }
  // }

  const validateEmail = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true
    }

    return false
  }

  function handleFormSubmit(event) {
    if (event) {
      event.preventDefault()
    }

    setIsLoading(true)

    const isValidEmail = validateEmail(formState.value)

    if (!isValidEmail) {
      setFormState({
        ...formState,
        error: 'Invalid Email Address',
        success: false
      })
      setIsLoading(false)
    } else {
      postNewsletterEmail(formState.value)
        .then((res) => {
          setIsLoading(false)
          setFormState({ value: '', error: '', success: true })
        })
        .catch((err) => {
          setIsLoading(false)
          setFormState({ ...formState, error: err.message })

          console.log(err)
        })
    }
  }

  return (
    <div className={clsx('flow', styles.newsLetterSignup)}>
      <div className='flow'>
        <SectionHeader
          hSize={'s'}
          header='Stay Up To Date'
          subText='Get weekly insights and updates from the Killer Whale Crew'
        />
      </div>
      <div className={styles.rightColumn}>
        <p className={styles.errorMessage}>{formState.error}</p>
        {formState.success && (
          <p className='text-green'>You have been signed up!</p>
        )}

        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner />
          </div>
        ) : (
          <form className={styles.inputBtnWrapper} onSubmit={handleFormSubmit}>
            <input
              type='text'
              placeholder='Email...'
              value={formState.value}
              onChange={(e) =>
                setFormState({ ...formState, value: e.target.value })
              }
            />
            <Button type='contained' onClick={handleFormSubmit}>
              Signup
            </Button>
          </form>
        )}
        <div className={clsx('fs-200 text-accent', styles.disclaimer)}>
          We do not send spam or sell your info. Click here to read our{' '}
          <Link linkTo='/'> Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}
