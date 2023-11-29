import { FC } from 'react'

import Breaker from '../Breaker/Breaker'

import classes from './Contacts.module.css'

interface ContactsProps {
  className?: string
}

const Contacts: FC<ContactsProps> = ({ className }) => {
  const rootClasses = [classes.contacts]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <Breaker number="05" title="Как с нами связаться" />
      Contacts
    </div>
  )
}

export default Contacts
