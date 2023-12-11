import { Anchor, Button, Icon } from 'cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Navbar.module.css'

interface NavbarProps {
  className?: string
}

interface NavItemProps {
  title: string
  href: string
  order: number
}

interface SocialItemProps {
  icon: 'whatsapp' | 'telegram'
  href: string
  order: number
}

const variants = {
  hidden: { opacity: 0, y: '-5rem' },

  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1, bounce: 0 },
  }),
}

const anchors = [
  {
    title: 'УСЛУГИ',
    href: '#services',
  },
  {
    title: 'ПЛАН КОВОРКИНГА',
    href: '#plan',
  },
  {
    title: 'КОНТАКТЫ',
    href: '#contacts',
  },
]

const socials: { icon: 'whatsapp' | 'telegram'; href: string }[] = [
  {
    icon: 'whatsapp',
    href: '#',
  },
  {
    icon: 'telegram',
    href: '#',
  },
]

const Navbar: FC<NavbarProps> = ({ className }) => {
  const rootClasses = [classes.navbar]
  if (className) rootClasses.push(className)

  return (
    <nav className={rootClasses.join(' ')}>
      <motion.ul className={classes.anchors}>
        {anchors.map((anchor, i) => (
          <NavItem key={anchor.title} {...anchor} order={i + 2} />
        ))}
      </motion.ul>

      <ul className={classes.actions}>
        <div className={classes.social}>
          {socials.map((social, i) => (
            <SocialItem key={social.icon} {...social} order={i + 5} />
          ))}
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

const NavItem: FC<NavItemProps> = ({ title, href, order }) => {
  return (
    <motion.li custom={order} variants={variants}>
      <Anchor href={href}>{title}</Anchor>
    </motion.li>
  )
}

const SocialItem: FC<SocialItemProps> = ({ icon, href, order }) => {
  return (
    <motion.a
      href={href}
      custom={order}
      variants={variants}
      className={classes.icon}
    >
      <Icon icon={icon} size="3.5rem" />
    </motion.a>
  )
}

export default Navbar
