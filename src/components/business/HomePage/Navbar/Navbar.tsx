import { Anchor, Button, Icon } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './Navbar.module.css'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const rootClasses = [classes.navbar]
  if (className) rootClasses.push(className)

  return (
    <nav className={rootClasses.join(' ')}>
      <ul className={classes.anchors}>
        <Anchor href="#services">УСЛУГИ</Anchor>
        <Anchor href="#plan">ПЛАН КОВОРКИНГА</Anchor>
        <Anchor href="#contacts">КОНТАКТЫ</Anchor>
      </ul>

      <ul className={classes.actions}>
        <div className={classes.social}>
          <a href="#" className={classes.icon}>
            <Icon icon="whatsapp" size="3.5rem" />
          </a>

          <a href="#" className={classes.icon}>
            <Icon icon="telegram" size="3.5rem" />
          </a>
        </div>

        <Button label="СВЯЗАТЬСЯ" color="black" size="small" />

        <Button label="ВОЙТИ" size="small" />
      </ul>
    </nav>
  )
}

export default Navbar
