import { MotionValue, motion } from 'framer-motion'
import { FC } from 'react'

import classes from './MenuBlure.module.css'

interface MenuBlureProps {
  top?: MotionValue<string>
  toggleOpened: () => void
}

const MenuBlure: FC<MenuBlureProps> = ({ top, toggleOpened }) => {
  return (
    <motion.span
      className={classes.menuBlure}
      onClick={toggleOpened}
      style={{ top }}
    />
  )
}

export default MenuBlure
