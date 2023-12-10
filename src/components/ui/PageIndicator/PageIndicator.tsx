import { Icon } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './PageIndicator.module.css'

interface PageIndicatorProps {
  current: number
  total: number
  className?: string
}

const PageIndicator: FC<PageIndicatorProps> = ({
  current,
  total,
  className,
}) => {
  const rootClasses = [classes.pageIndicator]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <Icon icon="square" color="orange" size="2.5rem" />
      <h4 className={classes.indicator}>{`${current}/${total}`}</h4>
    </div>
  )
}

export default PageIndicator
