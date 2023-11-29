import { FC } from 'react'

import classes from './Services.module.css'

interface ServicesProps {
  className?: string
}

const Services: FC<ServicesProps> = ({ className }) => {
  const rootClasses = [classes.services]
  if (className) rootClasses.push(className)

  return <div className={rootClasses.join(' ')}>Services</div>
}

export default Services
