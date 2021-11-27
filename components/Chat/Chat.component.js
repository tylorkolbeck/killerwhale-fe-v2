import styles from './Chat.module.scss'
import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function Chat() {
  return (
    <div className={clsx(styles.Chat, 'bg-green text-white')}>
      {' '}
      <FontAwesomeIcon icon={faComment} />
    </div>
  )
}
