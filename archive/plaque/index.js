import { useEffect, useState } from 'react'
import styles from './plaque.module.scss'
import html2canvas from 'html2canvas'
import ProductCard from './ProductCard/ProductCard.component'

export default function Plaque() {
  const exportAsPicture = (event) => {
    event.preventDefault()

    var svgElements = document.body.querySelectorAll('svg')
    svgElements.forEach(function (item) {
      item.setAttribute('width', item.getBoundingClientRect().width)
      item.setAttribute('height', item.getBoundingClientRect().height)
      item.style.width = null
      item.style.height = null
    })

    var html = document.getElementsByTagName('HTML')[0]
    var body = document.getElementsByTagName('BODY')[0]
    var htmlWidth = html.clientWidth
    var bodyWidth = body.clientWidth

    var data = document.getElementById('exportContainer')
    var newWidth = data.scrollWidth - data.clientWidth

    if (newWidth > data.clientWidth) {
      htmlWidth += newWidth
      bodyWidth += newWidth
    }

    html.style.width = htmlWidth + 'px'
    body.style.width = bodyWidth + 'px'

    html2canvas(data)
      .then((canvas) => {
        var image = canvas.toDataURL('image/png', 1.0)
        return image
      })
      .then((image) => {
        saveAs(image, 'exported-vis.png')
        html.style.width = null
        body.style.width = null
      })
  }

  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement('a')
    elem.href = blob
    elem.download = fileName
    elem.style = 'display:none;'
    ;(document.body || document.documentElement).appendChild(elem)

    if (typeof elem.click === 'function') {
      elem.click()
    } else {
      elem.target = '_blank'
      elem.dispatchEvent(
        new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        })
      )
    }
    URL.revokeObjectURL(elem.href)
    elem.remove()
  }

  const [formState, setFormState] = useState({
    name: 'Test',
    type: 'Strategy',
    tradeDuration: 0,
    tradeFreq: 0,
    experience: ['fish', 'dolphin'],
    width: 500,
    height: 500
  })

  function formChangedHandler(event) {
    const value = event.target.value
    const formField = event.target.name

    setFormState({
      ...formState,
      [formField]: value
    })
  }
  return (
    <div>
      <div className={styles.formWrapper}>
        <form onSubmit={exportAsPicture}>
          <label>
            <p>Name</p>
            <input
              name='name'
              type='text'
              value={formState.name}
              onChange={formChangedHandler}
            ></input>
          </label>
          <label>
            <p>Type</p>
            <input
              name='type'
              type='text'
              value={formState.type}
              onChange={formChangedHandler}
            ></input>
          </label>
          <label>
            <p>Trade Duration (0-100)</p>
            <input
              name='tradeDuration'
              type='number'
              value={formState.tradeDuration}
              onChange={formChangedHandler}
            ></input>
          </label>
          <label>
            <p>Trade Frequency (0-100)</p>
            <input
              name='tradeFreq'
              type='number'
              value={formState.tradeFreq}
              onChange={formChangedHandler}
            ></input>
          </label>
          <label>
            <p>Image Width</p>
            <input
              name='width'
              type='number'
              value={formState.width}
              onChange={formChangedHandler}
            ></input>
          </label>
          <label>
            <p>Image Height</p>
            <input
              name='height'
              type='number'
              value={formState.height}
              onChange={formChangedHandler}
            ></input>
          </label>
          <button
            className='button is-primary'
            type='submit'
            onClick={exportAsPicture}
          >
            Download Image
          </button>
        </form>
      </div>
      <div className={styles.productWrapper}>
        <div id='exportContainer'>
          <ProductCard
            name={formState.name}
            type={formState.type}
            experience={formState.experience}
            tradeDuration={formState.tradeDuration}
            tradeFreq={formState.tradeFreq}
          />
        </div>
      </div>
    </div>
  )
}
