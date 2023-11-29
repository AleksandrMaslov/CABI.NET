import { FC } from 'react'

import classes from './Breaker.module.css'

interface BreakerProps {
  number: string
  title: string
  className?: string
}

const Breaker: FC<BreakerProps> = ({ number, title, className }) => {
  const rootClasses = [classes.breaker]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <h4 className={classes.header}>{number}</h4>
      <h4 className={classes.header}>{title}</h4>
    </div>
  )
}

export default Breaker
