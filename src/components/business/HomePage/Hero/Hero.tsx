import { FC } from 'react'

import classes from './Hero.module.css'

interface HeroProps {
  className?: string
}

const Hero: FC<HeroProps> = ({ className }) => {
  const rootClasses = [classes.hero]
  if (className) rootClasses.push(className)

  return <div className={rootClasses.join(' ')}>Hero</div>
}

export default Hero
