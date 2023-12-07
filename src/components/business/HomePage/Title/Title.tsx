import { Icon } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './Title.module.css'

interface TitleProps {
  text: string
  className?: string
}

const Title: FC<TitleProps> = ({ text, className }) => {
  const rootClasses = [classes.title]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <Icon icon="square" color="orange" size="2.5rem" />
      <p className={classes.text}>{text}</p>
    </div>
  )
}

export default Title
