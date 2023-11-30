import { Anchor } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './Contact.module.css'

interface ContactProps {
  title: string
  content: string
  className?: string
}

const Contact: FC<ContactProps> = ({ title, content, className }) => {
  const rootClasses = [classes.contact]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <p>{title}</p>
      <Anchor className={classes.item} lineColor="white">
        {content}
      </Anchor>
    </div>
  )
}
export default Contact
