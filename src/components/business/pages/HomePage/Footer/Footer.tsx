import { Anchor, Logo } from '@aleksandrmaslov/cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Footer.module.css'

interface FooterProps {
  className?: string
}

const variants = {
  hidden: { opacity: 0, y: '5rem' },

  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1, bounce: 0, duration: 0.5 },
  }),
}

const Footer: FC<FooterProps> = ({ className }) => {
  const rootClasses = [classes.footer]
  if (className) rootClasses.push(className)

  return (
    <motion.footer
      className={rootClasses.join(' ')}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={classes.container}>
        <Logo color="white" href="#" />

        <div className={classes.wrapper}>
          <motion.h6 className={classes.title} variants={variants} custom={2}>
            © 2021 Сoworking.
            <span className={classes.signature}>
              Дизайн сайта - &nbsp;
              <Anchor
                className={classes.anchor}
                href="https://www.behance.net/maslovairina"
                target="_blank"
                underlined
                lineColor="white"
              >
                Ирина Маслова
              </Anchor>
              . Все права защищены.
            </span>
          </motion.h6>

          <Anchor href="#" underlined lineColor="white">
            <h6 className={classes.policy}>Политика конфиденциальности</h6>
          </Anchor>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
