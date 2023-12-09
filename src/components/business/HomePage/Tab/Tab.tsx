import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Tab.module.css'

interface TabProps {
  label: string
  onClick: (label: string) => void
  selected?: boolean
  className?: string
}

const Tab: FC<TabProps> = ({ label, onClick, selected, className }) => {
  const rootClasses = [classes.tab]
  if (className) rootClasses.push(className)

  return (
    <button className={rootClasses.join(' ')} onClick={() => onClick(label)}>
      <h4 className={classes.label}>{label}</h4>

      {selected && (
        <motion.div
          className={classes.border}
          layoutId="tab"
          transition={{ duration: 0.1 }}
        />
      )}
    </button>
  )
}

export default Tab
