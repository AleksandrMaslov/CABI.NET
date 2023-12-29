import { FC } from 'react'

import classes from './Warning.module.css'

interface WarningProps {
  className?: string
}

const Warning: FC<WarningProps> = ({ className }) => {
  const rootClasses = [classes.warning]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <h2 className={classes.header}>Произошла ошибка!</h2>
      <p className={classes.text}>Обратитесь в службу поддержки.</p>
    </div>
  )
}

export default Warning
