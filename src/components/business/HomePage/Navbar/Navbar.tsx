import { Anchor, Button, Icon } from 'cabinet_ui_kit'
import { FC, ReactNode } from 'react'

import { useModal } from 'src/context/modal'
import { navlinksData } from 'src/data'
import { useMediaQuery } from 'src/hooks'
import { useCustomAnimation } from 'src/hooks/framer_motion'

import { ApplicationForm, LoginForm } from '../..'

import classes from './Navbar.module.css'

interface NavbarProps {
  isOpened?: boolean
  toggleOpened?: () => void
  className?: string
}

const Navbar: FC<NavbarProps> = ({ isOpened, toggleOpened, className }) => {
  const rootClasses = [classes.navbar]
  if (className) rootClasses.push(className)

  const { openModal } = useModal()

  const isNotDesktop = useMediaQuery('(width < 992px)')

  const navbar = useCustomAnimation({
    selectors: `a, button`,
    keyframes: isNotDesktop
      ? {
          opacity: [0, 1],
          x: ['10rem', '0'],
        }
      : {
          opacity: [0, 1],
          y: ['-5rem', '0'],
        },
    once: !isNotDesktop,
  })

  const toggleMenu = () => {
    if (toggleOpened && isNotDesktop) toggleOpened()
  }

  const buttonClickHandler = (content: ReactNode) => {
    toggleMenu()
    openModal(content)
  }

  const callbackBtnClickHandler = () => buttonClickHandler(<ApplicationForm />)
  const loginBtnClickHandler = () => buttonClickHandler(<LoginForm />)

  return (
    <nav className={rootClasses.join(' ')} data-opened={isOpened} ref={navbar}>
      <Navlinks isOpened={isOpened} onClick={toggleMenu} />

      <div className={classes.actions}>
        <Socials isOpened={isOpened} onClick={toggleMenu} />

        <Button
          className={classes.button}
          label="СВЯЗАТЬСЯ"
          color="black"
          size="small"
          onClick={callbackBtnClickHandler}
        />

        <Button
          className={classes.button}
          label="ВОЙТИ"
          size="small"
          onClick={loginBtnClickHandler}
        />
      </div>
    </nav>
  )
}

interface NavlinksProps {
  isOpened?: boolean
  onClick?: () => void
}

const Navlinks: FC<NavlinksProps> = ({ isOpened, onClick }) => {
  return (
    <ul className={classes.navlinks}>
      {navlinksData.map(({ title, href }) => (
        <Anchor
          key={title}
          href={href}
          onClick={onClick}
          className={isOpened ? classes.navlink_white : undefined}
        >
          {title}
        </Anchor>
      ))}
    </ul>
  )
}

interface SocialsProps {
  isOpened?: boolean
  onClick?: () => void
}

const Socials: FC<SocialsProps> = ({ isOpened, onClick }) => {
  return (
    <ul className={classes.socials}>
      <Icon
        icon={'telegram'}
        size="3.5rem"
        href="#"
        onClick={onClick}
        className={isOpened ? classes.icon_mobile : undefined}
      />

      <Icon
        icon={'whatsapp'}
        size="3.5rem"
        href="#"
        onClick={onClick}
        className={isOpened ? classes.icon_mobile : undefined}
      />
    </ul>
  )
}

export default Navbar
