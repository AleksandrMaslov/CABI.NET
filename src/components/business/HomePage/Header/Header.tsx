import { Logo } from 'cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { Burger, MenuBlure } from 'src/components/ui'
import { useToggle } from 'src/hooks'
import {
  useHeaderAnimation,
  useScrollHeaderAnimation,
} from 'src/hooks/framer_motion'

import { Navbar } from '../..'

import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  const [isOpened, toggleOpened] = useToggle(false)

  const rootClasses = [classes.header]
  if (className) rootClasses.push(className)

  const logoClasses = [classes.logo]
  if (isOpened) logoClasses.push(classes.logo_white)

  const height = useScrollHeaderAnimation()
  const header = useHeaderAnimation(isOpened)

  return (
    <motion.header
      className={rootClasses.join(' ')}
      data-opened={isOpened}
      style={{ height }}
      ref={header}
    >
      <div className={classes.overline} />

      <div className={classes.container}>
        <Logo className={logoClasses.join(' ')} height="100%" href="#" />

        <Navbar isOpened={isOpened} toggleOpened={toggleOpened} />

        <Burger
          className={classes.burger}
          isOpened={isOpened}
          toggleOpened={toggleOpened}
        />

        {isOpened && <MenuBlure top={height} />}
      </div>
    </motion.header>
  )
}

export default Header
