import Image from 'next/image'
import Link from 'next/link'
import { getStrapiMedia } from '../../utils/media'
import styles from './RecentPosts.module.scss'
const { DateTime } = require('luxon')

const RecentPosts = ({ articles }) => {
  return (
    <>
      <h3>Most Recent</h3>
      <div className={styles.App}>{retrieveRecentPosts(articles)}</div>
    </>
  )
}

const retrieveRecentPosts = (articles) => {
  let posts = []
  for (let i = 1; i < 7; i++) {
    let post = articles[i]
    let publishedDate = DateTime.fromISO(post.publishedAt).toLocaleString(
      DateTime.DATE_MED
    )

    posts.push(
      <Link passHref href={`/article/${post.slug}`} key={post.id}>
        <a>
          <div className={styles.card}>
            <Image
              src={getStrapiMedia(post.image.formats.thumbnail.url)}
              alt={post.image.alternativeText}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <p>{post.title}</p>
          <p>
            {post.author.name} - {publishedDate}
          </p>
        </a>
      </Link>
    )
  }
  return posts
}

export default RecentPosts
