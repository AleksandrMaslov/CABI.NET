import { FC } from 'react'

import classes from './Contacts.module.css'

interface ContactsProps {
  className?: string
}

const Contacts: FC<ContactsProps> = ({ className }) => {
  const rootClasses = [classes.contacts]
  if (className) rootClasses.push(className)

  return <div className={rootClasses.join(' ')}>Contacts</div>
}

export default Contacts
