import SectionHeader from '../../components/SectionHeader/SectionHeader.component'
import styles from './support.module.scss'
import clsx from 'clsx'
import { FaDiscord, FaUsers, FaListAlt, FaQuestionCircle } from 'react-icons/fa'
import Link from '../../components/Link/Link.component'
import Button from '../../components/Button/Button.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function OnboardingSupport() {
  return (
    <div style={{ backgroundImage: `url('/images/background_2_ov.png')` }}>
      <div></div>
      <div className={styles.header}>
        <SectionHeader center header={'We are here to help'}></SectionHeader>
        <div className={styles.inputWrapper}>
          <input
            className='input is-rounded'
            type='text'
            placeholder='Search Knowledgebase...'
          />
          <Button>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
      <div className={clsx(styles.supportCards)}>
        <div className={styles.card}>
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

        <div className={styles.card}>
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

        <div className={styles.card}>
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

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaDiscord size={40} />
          </div>
          {/* <FontAwesomeIcon icon={FaDiscord} /> */}

          <h2 className='bold ff-good fs-400'>Discord Community</h2>
          <div className={styles.divider}>
            {/* <Divider width='100px' /> */}
          </div>

          <p className='text-accent'>
            Reach out to the large Killer Whale Community for help!
          </p>
          <div style={{ marginTop: 'auto' }}>
            <Link
              newTab
              linkTo='https://discord.gg/'
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
