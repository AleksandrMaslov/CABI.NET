import { Logo } from 'cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { Burger, MenuBlure } from 'src/components/ui'
import { useMediaQuery, useToggle } from 'src/hooks'
import { useFramerAnimation, useScrollAnimation } from 'src/hooks/framer_motion'

import { Navbar } from '../..'

import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  const isMobile = useMediaQuery('(width < 576px)')
  const [isOpened, toggleOpened] = useToggle(false)

  const rootClasses = [classes.header]
  if (className) rootClasses.push(className)

  const logoClasses = [classes.logo]
  if (isOpened) logoClasses.push(classes.logo_white)

  const height = useScrollAnimation([100, 300], ['13rem', '10rem'])

  const header = useFramerAnimation({
    keyframes: { backgroundColor: ['#fff', '#1f1f1f'] },
    condition: isMobile,
    trigger: isOpened,
  })

  const container = useFramerAnimation({
    selectors: `.${classes.logo}`,
    keyframes: {
      opacity: [0, 1],
      y: ['-5rem', '0'],
    },
    once: true,
  }) as React.RefObject<HTMLDivElement>

  return (
    <motion.header
      className={rootClasses.join(' ')}
      data-opened={isOpened}
      style={{ height }}
      ref={header}
    >
      <div className={classes.overline} />

      <div className={classes.container} ref={container}>
        <Logo className={logoClasses.join(' ')} height="100%" href="#" />

        <Navbar isOpened={isOpened} toggleOpened={toggleOpened} />

        <Burger
          className={classes.burger}
          isOpened={isOpened}
          toggleOpened={toggleOpened}
        />

        {isOpened && <MenuBlure top={height} toggleOpened={toggleOpened} />}
      </div>
    </motion.header>
  )
}

export default Header
