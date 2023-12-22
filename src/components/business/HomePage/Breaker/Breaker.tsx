import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Breaker.module.css'

interface BreakerProps {
  number: string
  title: string
  className?: string
}

const lineVariants = {
  hidden: { width: '0%' },

  visible: {
    width: '100%',
    transition: { duration: 0.5, bounce: 0 },
  },
}

const titleVariants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,
    transition: { delay: 0.5, bounce: 0 },
  },
}

const Breaker: FC<BreakerProps> = ({ number, title, className }) => {
  const rootClasses = [classes.breaker]
  if (className) rootClasses.push(className)

  return (
    <motion.div
      className={rootClasses.join(' ')}
      initial="hidden"
      whileInView="visible"
      variants={lineVariants}
      viewport={{ once: true, amount: 1 }}
    >
      <motion.h4 className={classes.header} variants={titleVariants}>
        {number}
      </motion.h4>

      <motion.h4 className={classes.header} variants={titleVariants}>
        {title}
      </motion.h4>
    </motion.div>
  )
}

export default Breaker
