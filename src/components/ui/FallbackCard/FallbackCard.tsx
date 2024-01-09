import { DotsLoader, SpaceCard } from 'cabinet_ui_kit'
import { FC } from 'react'

import { dummySpace } from 'src/data/spaces'

import classes from './FallbackCard.module.css'

interface FallbackCardProps {
  className?: string
}

const FallbackCard: FC<FallbackCardProps> = ({ className }) => {
  const rootClasses = [classes.fallbackCard]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <SpaceCard space={dummySpace} />
      <span className={classes.blur} />
      <DotsLoader className={classes.loader} color="white" />
    </div>
  )
}

export default FallbackCard
