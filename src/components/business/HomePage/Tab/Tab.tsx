import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Tab.module.css'

interface TabProps {
  label: string
  onClick: (label: string) => void
  className?: string
}

const Tab: FC<TabProps> = ({ label, onClick, className }) => {
  const rootClasses = [classes.tab]
  if (className) rootClasses.push(className)

  return (
    <motion.button
      className={rootClasses.join(' ')}
      onClick={() => onClick(label)}
    >
      {label}
    </motion.button>
  )
}

export default Tab
