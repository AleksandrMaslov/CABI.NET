import { Logo } from 'cabinet_ui_kit'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FC } from 'react'

import { Navbar } from '../..'

import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const variants = {
  hidden: { opacity: 0, y: '-5rem' },
  visible: { opacity: 1, y: 0, transition: { bounce: 0 } },
}

const Header: FC<HeaderProps> = ({ className }) => {
  const rootClasses = [classes.header]
  if (className) rootClasses.push(className)

  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [100, 300], ['13rem', '10rem'])

  return (
    <motion.header
      className={rootClasses.join(' ')}
      style={{ height }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={classes.overline} />
      <div className={classes.container}>
        <motion.a href="#" className={classes.logo} variants={variants}>
          <Logo />
        </motion.a>

        <Navbar />
      </div>
    </motion.header>
  )
}

export default Header
