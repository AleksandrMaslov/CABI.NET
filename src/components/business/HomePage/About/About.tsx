import { FC } from 'react'

import Breaker from '../Breaker/Breaker'

import classes from './About.module.css'

interface AboutProps {
  className?: string
}

const About: FC<AboutProps> = ({ className }) => {
  const rootClasses = [classes.about]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <Breaker number="01" title="Кто мы" />
      About
    </div>
  )
}

export default About
