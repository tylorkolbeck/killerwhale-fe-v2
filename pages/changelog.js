import { fetchAPI } from '../lib/api'
import Markdown from '../components/Markdown/Markdown.component'

export default function changelog({ changeLog }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

  return (
    <div className='container flow'>
      <h1 className='ff-good fs-600'>Killer Whale Change Log</h1>
      {changeLog &&
        changeLog.map((change) => (
          <div key={change.id}>
            <h3 className='ff-good fs-400 bold text-green'>
              {new Date(change.releaseDate).toLocaleDateString(
                'en-EN',
                options
              )}
            </h3>

            <Markdown>{change.changeDescription}</Markdown>
          </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const changeLog = await fetchAPI('/change-logs?_sort=releaseDate:DESC')

  return {
    props: {
      changeLog
    },
    revalidate: 1
  }
}
