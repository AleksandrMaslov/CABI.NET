import { FC } from 'react'

import classes from './Message.module.css'

interface MessageProps {
  title: string
  content: string
  className?: string
}

const Message: FC<MessageProps> = ({ title, content, className }) => {
  const rootClasses = [classes.message]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <h2 className={classes.header}>{title}</h2>
      <p className={classes.text}>{content}</p>
    </div>
  )
}

export default Message
