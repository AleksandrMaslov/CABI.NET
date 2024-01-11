import { Img } from '@aleksandrmaslov/cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { hero_img } from 'src/assets/home'
import { Title } from 'src/components/ui'

import { Cover } from '..'

import classes from './Hero.module.css'

interface HeroProps {
  className?: string
}

const variants = {
  hidden: { opacity: 0, x: '-20rem' },

  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: delay * 0.04, bounce: 0 },
  }),
}

const Hero: FC<HeroProps> = ({ className }) => {
  const rootClasses = [classes.hero]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <motion.div
          className={classes.wrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Img className={classes.img} src={hero_img} />

          <motion.div className={classes.text} custom={3} variants={variants}>
            <Title text="КОВОРКИНГ НА ЮГЕ МОСКВЫ" />

            <motion.h1 custom={4} variants={variants}>
              САМЫЕ ЛУЧШИЕ КВАДРАТНЫЕ МЕТРЫ В&nbsp;ГОРОДЕ.
            </motion.h1>
          </motion.div>
        </motion.div>

        <Cover />
      </div>
    </section>
  )
}

export default Hero
