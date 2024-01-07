import { Img, Marker } from 'cabinet_ui_kit'
import { FC } from 'react'

import { contacts_map } from 'src/assets/home'
import { Breaker } from 'src/components/ui'

import { Businesscard } from '..'

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
      </div>

      <div className={classes.wrapper}>
        <Img className={classes.bg} src={contacts_map} />

        <Marker className={classes.marker} tooltip="CABI.NET" />

        <Businesscard className={classes.businesscard} />
      </div>
    </section>
  )
}

export default Contacts
