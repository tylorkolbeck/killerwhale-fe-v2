import clsx from 'clsx'
import styles from './List.module.scss'
import Markdown from '../Markdown/Markdown.component'

export default function List({ items, parseLinks }) {
  const styling = {
    display: parseLinks ? 'flex' : 'block'
  }
  return (
    <ul className={clsx(styles.ulList, 'fs-400')}>
      {items.map((item, index) => (
        <li key={index} style={{ display: 'flex', marginRight: '5px' }}>
          {parseLinks ? <Markdown>{item}</Markdown> : item}
        </li>
      ))}
    </ul>
  )
}
