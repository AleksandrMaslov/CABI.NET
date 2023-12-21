import { MotionValue, motion } from 'framer-motion'
import { FC } from 'react'

import classes from './MenuBlure.module.css'

interface MenuBlureProps {
  top?: MotionValue<string>
  isOpened: boolean
}

const MenuBlure: FC<MenuBlureProps> = ({ top, isOpened }) => {
  return (
    <motion.span
      key={`${isOpened}`}
      className={classes.menuBlure}
      onClick={e => e.stopPropagation()}
      style={{ top }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    />
  )
}

export default MenuBlure
