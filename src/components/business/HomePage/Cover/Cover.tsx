import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Cover.module.css'

interface CoverProps {
  className?: string
}

const variants = {
  hidden: { opacity: 0, y: 100 },

  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1, bounce: 0 },
  }),
}

const Cover: FC<CoverProps> = ({ className }) => {
  const rootClasses = [classes.cover]
  if (className) rootClasses.push(className)

  return (
    <motion.div
      className={rootClasses.join(' ')}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={variants}
    >
      <motion.h4
        className={`${classes.lightgreen} ${classes.light}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        variants={variants}
        custom={1}
      >
        КОВОРКИНГ ЯВЛЯЕТСЯ ПРОВОДНИКОМ ПЕРЕМЕН И ОТВЕТОМ НА&nbsp;ОБЩЕСТВЕННЫЕ
        ПОТРЕБНОСТИ. ЭТО МЕСТО ГДЕ В ОДНОМ ОБЩЕМ ПРОСТРАНСТВЕ ОБЪЕДИНЯЮТСЯ ЛЮДИ
        С РАЗНОЙ ЗАНЯТОСТЬЮ ДЛЯ ОБЩЕНИЯ И&nbsp;ТВОРЧЕСКОГО ВЗАИМОДЕЙСТВИЯ
      </motion.h4>

      <motion.h3
        className={`${classes.black} ${classes.centered} ${classes.light}`}
        variants={variants}
        custom={4}
      >
        435м2
      </motion.h3>

      <motion.div
        className={`${classes.orange} ${classes.centered}`}
        variants={variants}
        custom={6}
      >
        <h3 className={classes.light}>7</h3>
        <p className={`${classes.content} ${classes.light}`}>смарт-офисов</p>
      </motion.div>

      <motion.div
        className={`${classes.blue} ${classes.centered}`}
        variants={variants}
        custom={8}
      >
        <h3 className={classes.light}>2</h3>
        <p className={`${classes.content} ${classes.light}`}>переговорных</p>
      </motion.div>

      <motion.div
        className={`${classes.green} ${classes.centered}`}
        variants={variants}
        custom={10}
      >
        <h3 className={classes.light}>20</h3>
        <p className={`${classes.content} ${classes.light}`}>
          рабочих мест в&nbsp;опенспейсах
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Cover
