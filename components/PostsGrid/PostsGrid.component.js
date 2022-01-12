import Image from 'next/image'
import Link from '../Link/Link.component'
import { getStrapiMedia } from '../../utils/media'
import styles from './PostsGrid.module.scss'
import { DateTime } from 'luxon'

const PostsGrid = ({ articles }) => {
  return (
    <div className={styles.App}>
      {articles?.length && renderPosts(articles)}
    </div>
  )
}

const renderPosts = (articles) => {
  return articles.map((post) => {
    let publishedDate = DateTime.fromISO(post.publishedAt).toLocaleString(
      DateTime.DATE_MED
    )

    return (
      <Link linkTo={`/article/${post.slug}`} key={post.id}>
        <div className='card'>
          <div className='card-image'>
            <figure
              className='image is-4by3'
              style={{ position: 'relative', height: '200px' }}
            >
              {post?.image?.formats && (
                <Image
                  src={getStrapiMedia(post?.image?.formats?.thumbnail?.url)}
                  alt={post?.image?.alternativeText ? post?.image?.alternativeText: 'presentational'}
                  layout='fill'
                  objectFit='cover'
                />
              )}
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

export default PostsGrid
