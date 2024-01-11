import { Img } from '@aleksandrmaslov/cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { request_bg } from 'src/assets/home'
import { RequestForm } from 'src/components/business/forms'

import classes from './Request.module.css'

interface RequestProps {
  className?: string
}

const variants = {
  hidden: { opacity: 0, y: '20rem' },

  visible: {
    opacity: 1,
    y: 0,
    transition: { bounce: 0 },
  },
}

const Request: FC<RequestProps> = ({ className }) => {
  const rootClasses = [classes.request]
  if (className) rootClasses.push(className)

  return (
    <motion.section
      className={rootClasses.join(' ')}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
    >
      <div className={classes.container}>
        <div className={classes.side}>
          <motion.div className={classes.text} variants={variants}>
            CAB
          </motion.div>
        </div>

        <div className={classes.square}></div>

        <RequestForm className={classes.form} />

        <Img className={classes.img} src={request_bg} />
      </div>
    </motion.section>
  )
}

export default Request
