import { Anchor, Button, Icon } from 'cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Navbar.module.css'

interface NavbarProps {
  className?: string
}

const variants = {
  hidden: { opacity: 0, y: -50 },

  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1, bounce: 0 },
  }),
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const rootClasses = [classes.navbar]
  if (className) rootClasses.push(className)

  return (
    <nav className={rootClasses.join(' ')}>
      <motion.ul className={classes.anchors}>
        <motion.li custom={2} variants={variants}>
          <Anchor href="#services">УСЛУГИ</Anchor>
        </motion.li>
        <motion.li custom={3} variants={variants}>
          <Anchor href="#plan">ПЛАН КОВОРКИНГА</Anchor>
        </motion.li>
        <motion.li custom={4} variants={variants}>
          <Anchor href="#contacts">КОНТАКТЫ</Anchor>
        </motion.li>
      </motion.ul>

      <ul className={classes.actions}>
        <div className={classes.social}>
          <motion.a
            href="#"
            className={classes.icon}
            custom={5}
            variants={variants}
          >
            <Icon icon="whatsapp" size="3.5rem" />
          </motion.a>

          <motion.a
            href="#"
            className={classes.icon}
            custom={6}
            variants={variants}
          >
            <Icon icon="telegram" size="3.5rem" />
          </motion.a>
        </div>

        <motion.span custom={7} variants={variants}>
          <Button label="СВЯЗАТЬСЯ" color="black" size="small" />
        </motion.span>

        <motion.span custom={8} variants={variants}>
          <Button label="ВОЙТИ" size="small" />
        </motion.span>
      </ul>
    </nav>
  )
}

export default Navbar
