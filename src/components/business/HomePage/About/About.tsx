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
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="01" title="Кто мы" />
        About
      </div>
    </section>
  )
}

export default About
