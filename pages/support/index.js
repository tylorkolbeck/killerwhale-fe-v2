import { useState } from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import styles from './support.module.scss'
import clsx from 'clsx'
import { FaDiscord, FaUsers, FaListAlt, FaQuestionCircle } from 'react-icons/fa'
import Link from '../../components/Link/Link.component'
import Button from '../../components/Button/Button.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export default function OnboardingSupport() {
  const [inputState, setInputState] = useState('')
  const router = useRouter()

  function onSearchHandler() {
    const link = document.getElementById('externalNavigation')
    const searchString = inputState.split(' ').join('+')

    link.setAttribute(
      'href',
      `https://support.killerwhalecrypto.com/hc/en-us/search?utf8=%E2%9C%93&query=${searchString}`
    )
    link.click()
  }

  function cardClickHandler(link) {
    const linkEl = document.getElementById('externalNavigation')
    linkEl.setAttribute('href', link)
    linkEl.setAttribute('target', '_blank')

    linkEl.click()
  }

  return (
    <div style={{ backgroundImage: `url('/images/background_2_ov.png')` }}>
      <NextSeo
        title='Support'
        description='KillerWhaleCrypto focuses on cryptocurrency trading and automated trading bots. We discuss and educate on chart patterns, technical analysis for various crypto like bitcon (BTC), Ethereum (ETH) and altcoins.
        Join us today and CHANGE THE WAY YOU TRADE'
      />
      <a
        id='externalNavigation'
        style={{ display: 'none' }}
        target='_blank'
      ></a>
      <div></div>
      <div className={styles.header}>
        <SectionHeader center header={'We are here to help'}></SectionHeader>
        <form onSubmit={onSearchHandler}>
          <div className={styles.inputWrapper}>
            <input
              className='input is-rounded'
              type='text'
              placeholder='Search Knowledgebase...'
              value={inputState}
              onChange={(event) => setInputState(event.target.value)}
            />
            <Button onClick={onSearchHandler}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </form>
      </div>
      <div className={clsx(styles.supportCards)}>
        <div
          className={styles.card}
          onClick={() =>
            cardClickHandler(
              'https://support.killerwhalecrypto.com/hc/en-us/categories/4407769214875-Setup-Guides'
            )
          }
        >
          <div className={styles.iconWrapper}>
            <FaListAlt size={40} />
          </div>
          <h2 className='bold ff-good fs-400'>Setup Guides</h2>
          <div className={styles.divider}>
            {/* <Divider width='100px' /> */}
          </div>

          <p className='text-accent'>
            View setup guides for strategies and signals
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link
              newTab
              linkTo='https://support.killerwhalecrypto.com/hc/en-us/categories/4407769214875-Setup-Guides'
              iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Visit
            </Link>
          </div>
        </div>

        <div
          className={styles.card}
          onClick={() =>
            cardClickHandler('https://support.killerwhalecrypto.com/hc/en-us')
          }
        >
          <div className={styles.iconWrapper}>
            <FaQuestionCircle size={40} />
          </div>
          <h2 className='bold ff-good fs-400'>Knowledgebase & FAQ</h2>
          <div className={styles.divider}>
            {/* <Divider width='100px' /> */}
          </div>

          <p className='text-accent'>
            Read through our extensive knowledgebase and FAQ documentation
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link
              newTab
              linkTo='https://support.killerwhalecrypto.com/hc/en-us'
              iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Visit
            </Link>
          </div>
        </div>

        <div
          className={styles.card}
          onClick={() =>
            cardClickHandler(
              'https://support.killerwhalecrypto.com/hc/en-us/community/topics'
            )
          }
        >
          <div className={styles.iconWrapper}>
            <FaUsers size={40} />
          </div>
          <h2 className='bold ff-good fs-400'>Community Forum</h2>
          <div className={styles.divider}>
            {/* <Divider width='100px' /> */}
          </div>
          <p className='text-accent'>
            Get help from the community on our support forum
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link
              newTab
              linkTo='https://support.killerwhalecrypto.com/hc/en-us/community/topics'
              iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Visit
            </Link>
          </div>
        </div>

        <div
          className={styles.card}
          onClick={() => cardClickHandler('https://discord.gg/UNXZhFVnrA')}
        >
          <div className={styles.iconWrapper}>
            <FaDiscord size={40} />
          </div>
          {/* <FontAwesomeIcon icon={FaDiscord} /> */}

          <h2 className='bold ff-good fs-400'>Discord Community</h2>
          <div className={styles.divider}>
            {/* <Divider width='100px' /> */}
          </div>

          <p className='text-accent'>
            Join and participate in the Killer Whale community
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link
              newTab
              linkTo='https://discord.gg/UNXZhFVnrA'
              iconEnd={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
