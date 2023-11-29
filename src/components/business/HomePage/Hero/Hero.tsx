import { FC } from 'react'

import classes from './Hero.module.css'

interface HeroProps {
  className?: string
}

const Hero: FC<HeroProps> = ({ className }) => {
  const rootClasses = [classes.hero]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>Hero</div>
    </section>
  )
}

export default Hero
