import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './TempBlock.module.css'

interface TempBlockProps {
  title: string
  className?: string
}

const TempBlock: FC<TempBlockProps> = ({ title, className }) => {
  const rootClasses = [classes.tempBlock]
  if (className) rootClasses.push(className)

  return (
    <motion.section
      className={rootClasses.join(' ')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, bounce: 0 }}
    >
      <h2>{title}</h2>
      <p>This page is under construction.</p>
      <p>Please be patient.</p>
    </motion.section>
  )
}

export default TempBlock
