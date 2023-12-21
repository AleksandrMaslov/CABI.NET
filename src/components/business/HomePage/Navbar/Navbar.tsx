import { Anchor, Button, Icon } from 'cabinet_ui_kit'
import { FC } from 'react'

import { navlinksData } from 'src/data'
import { useMediaQuery } from 'src/hooks'
import { useNavbarAnimation } from 'src/hooks/framer_motion'

import classes from './Navbar.module.css'

interface NavbarProps {
  isOpened?: boolean
  toggleOpened?: () => void
  className?: string
}

const Navbar: FC<NavbarProps> = ({ isOpened, toggleOpened, className }) => {
  const rootClasses = [classes.navbar]
  if (className) rootClasses.push(className)

  const isTabletOrMobile = useMediaQuery('(width < 992px)')
  const navbar = useNavbarAnimation(isOpened!)

  const clickHandler = () => {
    if (toggleOpened && isTabletOrMobile) toggleOpened()
  }

  return (
    <nav className={rootClasses.join(' ')} ref={navbar}>
      <ul className={classes.anchors}>
        {navlinksData.map(({ title, href }) => (
          <Anchor
            key={title}
            href={href}
            onClick={clickHandler}
            className={isOpened ? classes.anchor_white : undefined}
          >
            {title}
          </Anchor>
        ))}
      </ul>

      <div className={classes.actions}>
        <div className={classes.socials}>
          <Icon
            icon={'telegram'}
            size="3.5rem"
            href="#"
            onClick={clickHandler}
            className={isOpened ? classes.icon_white : undefined}
          />

          <Icon
            icon={'whatsapp'}
            size="3.5rem"
            href="#"
            onClick={clickHandler}
            className={isOpened ? classes.icon_white : undefined}
          />
        </div>

        <Button
          label="СВЯЗАТЬСЯ"
          color="black"
          size="small"
          onClick={clickHandler}
        />

        <Button label="ВОЙТИ" size="small" onClick={clickHandler} />
      </div>
    </nav>
  )
}

export default Navbar
