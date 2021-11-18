import React, { useState, useRef } from 'react'
import { exportComponentAsPNG } from 'react-component-export-image'
import ProductCard from '../ProductCard/ProductCard.component'
import Button from '../Button/Button.component'
import styles from './Plaque.module.scss'

const Plaque = () => {
  const [productName, setProductName] = useState('gain btc')
  const [productType, setProductType] = useState('strategy')
  const [tradeDuration, setTradeDuration] = useState('25')
  const [tradeFrequency, setTradeFrequency] = useState('75')
  const [expLevelNew, setExpLevelNew] = useState(false)
  const [expLevelExperienced, setExpLevelExperienced] = useState(false)
  const [expLevelWhale, setExpLevelWhale] = useState(false)
  const [imageHeight, setImageHeight] = useState('720')
  const [imageWidth, setImageWidth] = useState('1000')
  const componentRef = useRef()

  // eslint-disable-next-line react/display-name
  const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <ProductCard
          name={productName}
          type={productType}
          tradeDuration={tradeDuration}
          tradeFreq={tradeFrequency}
          newLevel={expLevelNew}
          experiencedLevel={expLevelExperienced}
          whaleLevel={expLevelWhale}
        />
      </div>
    )
  })

  const nameChangeHandler = (event) => {
    setProductName(event.target.value)
  }
  const typeChangeHandler = (event) => {
    setProductType(event.target.value)
  }
  const tradeDurationChangeHandler = (event) => {
    setTradeDuration(event.target.value)
  }
  const tradeFrequencyChangeHandler = (event) => {
    setTradeFrequency(event.target.value)
  }
  const expLevelNewHandler = () => {
    setExpLevelNew(!expLevelNew)
  }
  const expLevelExperiencedHandler = () => {
    setExpLevelExperienced(!expLevelExperienced)
  }
  const expLevelWhaleHandler = () => {
    setExpLevelWhale(!expLevelWhale)
  }
  const heightChangeHandler = (event) => {
    setImageHeight(event.target.value)
  }
  const widthChangeHandler = (event) => {
    setImageWidth(event.target.value)
  }

  return (
    <div className={styles.container}>
      <form className={styles.formGrid}>
        <label className={styles.label} htmlFor='product-name'>
          Product Name:
          <input
            className={styles.input}
            placeholder='Gain BTC'
            type='text'
            id='product-name'
            onChange={nameChangeHandler}
          />
        </label>
        <label className={styles.label} htmlFor='product-type'>
          Product Type:
          <input
            className={styles.input}
            placeholder='Strategy'
            type='text'
            id='trade-frequency'
            onChange={typeChangeHandler}
          />
        </label>
        <label className={styles.label} htmlFor='trade-duration'>
          Trade Duration:
          <input
            className={styles.input}
            step='5'
            type='number'
            id='trade-duration'
            min='0'
            max='100'
            onChange={tradeDurationChangeHandler}
          />
        </label>
        <label className={styles.label} htmlFor='trade-frequency'>
          Trade Frequency:
          <input
            className={styles.input}
            step='5'
            type='number'
            id='trade-frequency'
            min='0'
            max='100'
            onChange={tradeFrequencyChangeHandler}
          />
        </label>
        <label className={styles.label}>
          New
          <input
            type='checkbox'
            value='new'
            checked={!expLevelNew}
            onChange={expLevelNewHandler}
          />
        </label>
        <label className={styles.label}>
          Experienced
          <input
            type='checkbox'
            value='experienced'
            checked={!expLevelExperienced}
            onChange={expLevelExperiencedHandler}
          />
        </label>
        <label className={styles.label}>
          Whale
          <input
            type='checkbox'
            value='whale'
            checked={!expLevelWhale}
            onChange={expLevelWhaleHandler}
          />
        </label>
      </form>

      <div className={styles.productGrid}>
        <ComponentToPrint ref={componentRef} />
        <div>
          <label htmlFor='height' className={styles.label}>
            Height
            <input
              className={styles.cardInput}
              onChange={heightChangeHandler}
              id='height'
              type='number'
              min='0'
            />
          </label>
          <label htmlFor='width' className={styles.label}>
            Width
            <input
              className={styles.cardInput}
              onChange={widthChangeHandler}
              id='width'
              type='number'
              min='0'
            />
          </label>
        </div>
        <Button
          onClick={() =>
            exportComponentAsPNG(componentRef, {
              html2CanvasOptions: {
                height: imageHeight,
                width: imageWidth
              }
            })
          }
        >
          Export As PNG
        </Button>
      </div>
    </div>
  )
}

export default Plaque
