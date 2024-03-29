import { Button, Logo } from '@aleksandrmaslov/cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { useAuth } from 'src/context/auth'
import { useCustomAnimation, useScrollAnimation } from 'src/hooks/framer_motion'

import classes from './Header.module.css'

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  const rootClasses = [classes.header]
  if (className) rootClasses.push(className)

  const { user, signOut } = useAuth()

  const height = useScrollAnimation([100, 300], ['10rem', '6rem'])

  const container = useCustomAnimation({
    selectors: `.${classes.logo}`,
    keyframes: {
      opacity: [0, 1],
      y: ['-5rem', '0'],
    },
    once: true,
  }) as React.RefObject<HTMLDivElement>

  return (
    <motion.header className={rootClasses.join(' ')} style={{ height }}>
      <div className={classes.container} ref={container}>
        <Logo className={classes.logo} height="100%" href="#" />

        <div className={classes.wrapper}>
          <h4>{user?.name}</h4>

          <Button
            className={classes.btn}
            label="Выйти"
            size="small"
            onClick={() => {
              signOut()
            }}
          />
        </div>
      </div>
    </motion.header>
  )
}

export default Header
