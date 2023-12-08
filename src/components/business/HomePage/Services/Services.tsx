import { FC } from 'react'

import Breaker from '../Breaker/Breaker'
import Tickers from '../Tickers/Tickers'

import classes from './Services.module.css'

interface ServicesProps {
  className?: string
}

const Services: FC<ServicesProps> = ({ className }) => {
  const rootClasses = [classes.services]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="02" title="Услуги" />

        <h2>НАШЕ ПРОСТРАНСТВО</h2>

        <div className={classes.slider}>
          <h3>SLIDER</h3>
        </div>

        <Tickers className={classes.tickers} />
      </div>
    </div>
  )
}

export default Services
