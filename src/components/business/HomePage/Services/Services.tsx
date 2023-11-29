import { FC } from 'react'

import Breaker from '../Breaker/Breaker'

import classes from './Services.module.css'

interface ServicesProps {
  className?: string
}

const Services: FC<ServicesProps> = ({ className }) => {
  const rootClasses = [classes.services]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <Breaker number="02" title="Услуги" />
      Services
    </div>
  )
}

export default Services
