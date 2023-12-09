import { Logo } from 'cabinet_ui_kit'
import { FC } from 'react'

import { Navbar } from '../..'

import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  const rootClasses = [classes.header]
  if (className) rootClasses.push(className)

  return (
    <header className={rootClasses.join(' ')}>
      <div className={classes.overline} />
      <div className={classes.container}>
        <Logo className={classes.logo} />

        <Navbar />
      </div>
    </header>
  )
}

export default Header
