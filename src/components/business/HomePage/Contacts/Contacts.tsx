import { Marker } from 'cabinet_ui_kit'
import { FC } from 'react'

import { Breaker, Businesscard } from '../..'

import classes from './Contacts.module.css'

interface ContactsProps {
  className?: string
}

const Contacts: FC<ContactsProps> = ({ className }) => {
  const rootClasses = [classes.contacts]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container} id="contacts">
        <Breaker number="05" title="Как с нами связаться" />

        <Businesscard className={classes.businesscard} />

        <Marker className={classes.marker} tooltip="CABI.NET" />
      </div>
    </section>
  )
}

export default Contacts
