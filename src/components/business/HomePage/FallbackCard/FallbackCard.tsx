import { Img } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './FallbackCard.module.css'

interface FallbackCardProps {
  className?: string
}

const FallbackCard: FC<FallbackCardProps> = ({ className }) => {
  const rootClasses = [classes.fallbackCard]
  if (className) rootClasses.push(className)

  return (
    <article className={rootClasses.join(' ')}>
      <Img className={classes.img} loader />

      <div className={classes.content}></div>
    </article>
  )
}

export default FallbackCard
