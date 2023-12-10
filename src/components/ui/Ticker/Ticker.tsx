import { FC, ReactNode } from 'react'

import classes from './Ticker.module.css'

interface TickerProps {
  content: ReactNode
  reversed?: boolean
  className?: string
}

const Ticker: FC<TickerProps> = ({ content, reversed, className }) => {
  const rootClasses = [classes.ticker]
  if (className) rootClasses.push(className)

  const itemClasses = [classes.item]
  if (reversed) itemClasses.push(classes.item_reversed)

  return (
    <div className={rootClasses.join(' ')}>
      {Array.from({ length: 2 }, (_, i) => i + 1).map(i => (
        <div key={i} className={itemClasses.join(' ')}>
          {content}
        </div>
      ))}
    </div>
  )
}

export default Ticker
