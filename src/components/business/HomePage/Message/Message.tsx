import { FC } from 'react'

import classes from './Message.module.css'

interface MessageProps {
  title: string
  content: string
  className?: string
}

const Message: FC<MessageProps> = ({ className }) => {
  const rootClasses = [classes.message]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <h2 className={classes.header}>
        Спасибо, ваша заявка успешно отправлена!
      </h2>

      <p className={classes.text}>Мы свяжемся с вами в ближайшее время.</p>
    </div>
  )
}

export default Message
