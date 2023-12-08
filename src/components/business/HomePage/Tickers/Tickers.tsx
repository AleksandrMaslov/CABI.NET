import { Icon } from 'cabinet_ui_kit'
import { FC } from 'react'

import Ticker from '../Ticker/Ticker'

import classes from './Tickers.module.css'

interface TickersProps {
  className?: string
}

const Tickers: FC<TickersProps> = ({ className }) => {
  const rootClasses = [classes.tickers]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <Ticker content={ticker} />
      <Ticker content={ticker} reversed />
    </div>
  )
}

export default Tickers

const ticker = (
  <span className={classes.string}>
    <h2>ФУНКЦИОНАЛЬНОЕ ПРОСТРАНСТВО ДЛЯ КОМФОРТНОЙ РАБОТЫ</h2>
    <Icon icon="square" size="1rem" />
  </span>
)
