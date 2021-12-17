import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import Link from '../Link/Link.component'
import List from '../List/List.component'
import Image from 'next/image'
import styles from './Markdown.module.scss'
import { getStrapiMedia } from '../../utils/media'
// import { makeStyles } from '@material-ui/core/styles'
// import BodyText from '../../components/Typography/BodyText/BodyText.component'
// import BulletItem from '../../components/Typography/BulletItem/BulletItem.component'

// const useStyles = makeStyles(({ palette }) => {
//   return {
//     markdownStyling: {
//       position: 'relative',
//       '& .markdownImage': {
//         maxWidth: '100%',
//         padding: '20px',
//         paddingTop: '40px',
//         paddingBottom: '40px',
//         display: 'block',
//         margin: '20px auto',

//         '&:hover': {
//           cursor: 'pointer'
//         }
//       },
//       '& span': {
//         width: '100%',
//         display: 'block'
//       },
//       '& iframe': {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         width: '100%',
//         height: '100%'
//       },

//       '& .video': {
//         position: 'relative',
//         zIndex: '1',
//         overflow: 'hidden',
//         width: '100%',
//         paddingTop: '56.25%' /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
//       },
//       '& li': {
//         fontSize: '18px',
//         lineHeight: '34px'
//       }
//     },
//     backdrop: {
//       background: 'black',
//       position: 'fixed',
//       top: '0',
//       left: '0',
//       right: '0',
//       bottom: '0',
//       opacity: '.8',
//       zIndex: '100'
//     },
//     orderedList: {
//       fontSize: '18px'
//     },
//     enlargedImage: {
//       position: 'fixed',
//       top: '50%',
//       left: '50%',
//       zIndex: '100',
//       transform: 'translate(-50%, -50%)',
//       '&:hover': {
//         cursor: 'pointer'
//       },
//       '& img': {
//         width: '90vw',
//         maxWidth: '1200px'
//       }
//     },
//     coinList: {
//       '& p': {
//         color:
//           palette.type === 'light'
//             ? 'rgba(0,0,0,.8) !important'
//             : 'white !important'
//       }
//     }
//   }
// })

export default function Markdown({ children, coinList }) {
  // const classes = useStyles()
  const [enlargedImage, setEnlargedImage] = React.useState(null)
  const [pageLoaded, setPageLoaded] = React.useState(false)

  React.useEffect(() => {
    enlargedImage
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [enlargedImage])

  React.useEffect(() => {
    if (pageLoaded) {
      const coinContainer = document.getElementById('coin-list')

      if (coinContainer && Array.isArray(coinList)) {
        const coinEls = coinList.map((c) => {
          return <div key={c.coin}>{c.coin}</div>
        })

        ReactDOM.render(coinEls, coinContainer)
      }
    }

    setPageLoaded(true)
  }, [pageLoaded])

  function enlargeImageHandler(src) {
    const imageModal = (
      <div
        className={styles.enlargedImage}
        onClick={unsetEnlargedImageHandler}
      >
        <Image src={src} 
        alt=""
        layout="fill"
        objectFit="contain"/>
      </div>
    )

    setEnlargedImage(imageModal)
  }

  function unsetEnlargedImageHandler() {
    setEnlargedImage(null)
  }

  const components = {
    // p: ({ children }) => {
    //   return (
    //     <BodyText fontSize="18px" lineHeight="34px">
    //       {children}
    //     </BodyText>
    //   )
    // },
    p: ({children}) => {
      return <p>{children}</p>
    },
    a: ({ href, children }) => {
      return (
        <Link linkTo={href} newTab={true} >
          {children}
        </Link>
      )
    },
    li: ({ items }) => {
          return(items ? <List items={items}/> : null)
    },
    code: ({ value }) => {
      return <div id={value} className={styles.coinList}></div>
    },
    img: (props) => {
      return (
        <div onClick={() => enlargeImageHandler(props.src)}>
        <Image src={getStrapiMedia(props.src)}
        alt={props.alt}
        className={styles.markdownImage}
        layout="fill"
        objectFit="contain"/>
        </div>
      )
    }
  }

  return (
    <div className={styles.markdownStyling}>
      {enlargedImage ? (
        <div
          className={styles.backdrop}
          onClick={unsetEnlargedImageHandler}
        ></div>
      ) : null}
      {enlargedImage ? enlargedImage : null}

      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  )
}
