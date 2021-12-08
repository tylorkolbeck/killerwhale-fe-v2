import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles'
import BodyText from '../../components/Typography/BodyText/BodyText.component'
import BulletItem from '../../components/Typography/BulletItem/BulletItem.component'

const useStyles = makeStyles(({ palette }) => {
  return {
    markdownStyling: {
      position: 'relative',
      '& .markdownImage': {
        maxWidth: '100%',
        padding: '20px',
        paddingTop: '40px',
        paddingBottom: '40px',
        display: 'block',
        margin: '20px auto',

        '&:hover': {
          cursor: 'pointer'
        }
      },
      '& span': {
        width: '100%',
        display: 'block'
      },
      '& iframe': {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%'
      },

      '& .video': {
        position: 'relative',
        zIndex: '1',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%' /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
      },
      '& li': {
        fontSize: '18px',
        lineHeight: '34px'
      }
    },
    backdrop: {
      background: 'black',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      opacity: '.8',
      zIndex: '100'
    },
    orderedList: {
      fontSize: '18px'
    },
    enlargedImage: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      zIndex: '100',
      transform: 'translate(-50%, -50%)',
      '&:hover': {
        cursor: 'pointer'
      },
      '& img': {
        width: '90vw',
        maxWidth: '1200px'
      }
    },
    coinList: {
      '& p': {
        color:
          palette.type === 'light'
            ? 'rgba(0,0,0,.8) !important'
            : 'white !important'
      }
    }
  }
})

export default function Markdown({ source, coinList }) {
  const classes = useStyles()
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
          return <BodyText key={c.coin}>{c.coin}</BodyText>
        })

        ReactDOM.render(coinEls, coinContainer)
      }
    }

    setPageLoaded(true)
  }, [pageLoaded])

  function enlargeImageHandler(src) {
    const imageModal = (
      <div
        className={classes.enlargedImage}
        onClick={unsetEnlargedImageHandler}
      >
        <img src={src} />
      </div>
    )

    setEnlargedImage(imageModal)
  }

  function unsetEnlargedImageHandler() {
    setEnlargedImage(null)
  }

  const renderers = {
    paragraph: ({ children }) => {
      return (
        <BodyText fontSize="18px" lineHeight="34px">
          {children}
        </BodyText>
      )
    },
    link: ({ href, children }) => {
      return (
        <a href={href} target="_blank" style={{ color: 'dodgerblue' }}>
          {children}
        </a>
      )
    },
    list: ({ ordered, children }) => {
      if (!ordered) {
        return children.map((item, index) => (
          <BulletItem
            style={{ paddingLeft: '20px', lineHeight: '34px' }}
            key={index}
          >
            {item}
          </BulletItem>
        ))
      } else {
        return <ol className={classes.orderedList}>{children}</ol>
      }
    },
    code: ({ value }) => {
      return <div id={value} className={classes.coinList}></div>
    },
    image: (props) => {
      return (
        <img
          className="markdownImage"
          src={props.src}
          onClick={() => enlargeImageHandler(props.src)}
        />
      )
    }
  }

  return (
    <div className={classes.markdownStyling}>
      {enlargedImage ? (
        <div
          className={classes.backdrop}
          onClick={unsetEnlargedImageHandler}
        ></div>
      ) : null}
      {enlargedImage ? enlargedImage : null}

      <ReactMarkdown renderers={renderers} source={source} escapeHtml={false} />
    </div>
  )
}
