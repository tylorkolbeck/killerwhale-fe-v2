import Image from 'next/image'
import Link from '../Link/Link.component'
import { getStrapiMedia } from '../../utils/media'
import styles from './RecentPosts.module.scss'
import { DateTime } from 'luxon'

const RecentPosts = ({ articles }) => {
  return (
    <div className={styles.App}>
      {articles.length && renderRecentPosts(articles)}
    </div>
  )
}

const renderRecentPosts = (articles) => {
  return articles.map((post) => {
    let publishedDate = DateTime.fromISO(post.publishedAt).toLocaleString(
      DateTime.DATE_MED
    )

    return (
      <Link key={post.id} linkTo={`/article/${post.slug}`} key={post.id}>
        <div className='card'>
          <div className='card-image'>
            <figure
              className='image is-4by3'
              style={{ position: 'relative', height: '200px' }}
            >
              <Image
                src={getStrapiMedia(post.image.formats.thumbnail.url)}
                alt='Placeholder image'
                layout='fill'
                objectFit='cover'
              />
            </figure>
          </div>
          <div className='card-content'>
            <div className='content mt-1'>
              <p className='fs-400'>{post.title}</p>
              <p className='fs-200'>
                {post.author.name} - {publishedDate}
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
  })
}

export default RecentPosts
