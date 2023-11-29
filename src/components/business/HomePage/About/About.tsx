import { FC } from 'react'

import classes from './About.module.css'

interface AboutProps {
  className?: string
}

const About: FC<AboutProps> = ({ className }) => {
  const rootClasses = [classes.about]
  if (className) rootClasses.push(className)

  return <div className={rootClasses.join(' ')}>About</div>
}

export default About
