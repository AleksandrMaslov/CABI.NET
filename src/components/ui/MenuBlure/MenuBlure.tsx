import { MotionValue, motion } from 'framer-motion'
import { FC } from 'react'

import classes from './MenuBlure.module.css'

interface MenuBlureProps {
  top?: MotionValue<string>
}

const MenuBlure: FC<MenuBlureProps> = ({ top }) => {
  return (
    <motion.span
      className={classes.menuBlure}
      onClick={e => e.stopPropagation()}
      style={{ top }}
    />
  )
}

export default MenuBlure
