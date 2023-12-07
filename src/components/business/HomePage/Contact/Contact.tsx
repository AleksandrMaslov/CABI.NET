import { Anchor } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './Contact.module.css'

interface ContactProps {
  title: string
  content: string
  href?: string
  className?: string
}

const Contact: FC<ContactProps> = ({ title, content, href, className }) => {
  const rootClasses = [classes.contact]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <p>{title}</p>
      <Anchor href={href} className={classes.item} lineColor="white">
        {content}
      </Anchor>
    </div>
  )
}
export default Contact
