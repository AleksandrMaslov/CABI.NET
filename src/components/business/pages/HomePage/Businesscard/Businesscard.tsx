import { Anchor } from '@aleksandrmaslov/cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC } from 'react'

import classes from './Businesscard.module.css'

interface BusinesscardProps {
  className?: string
}

interface ContactProps {
  title: string
  content: string
  href?: string
}

const variants = {
  hidden: { opacity: 0, y: '20rem' },

  visible: {
    opacity: 1,
    y: 0,
    transition: { bounce: 0 },
  },
}

const Businesscard: FC<BusinesscardProps> = ({ className }) => {
  const rootClasses = [classes.businesscard]
  if (className) rootClasses.push(className)

  return (
    <motion.div
      className={rootClasses.join(' ')}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={variants}
    >
      <ul className={classes.content}>
        <h2 className={classes.title}>Контакты</h2>

        <Contact href="#" title="Адрес:" content="Воронцовские пруды, д.3" />

        <Contact href="#" title="Телефон:" content="+7 (495) 555-55-55" />

        <Contact href="#" title="E-mail:" content="coworking@mail.ru" />

        <li className={classes.social}>
          <Anchor href="#" lineColor="white" underlined>
            Telegram
          </Anchor>

          <Anchor href="#" lineColor="white" underlined>
            WhatsApp
          </Anchor>
        </li>
      </ul>

      <div className={classes.milk} />
      <div className={classes.orange} />
    </motion.div>
  )
}

const Contact: FC<ContactProps> = ({ title, content, href }) => {
  return (
    <li className={classes.contact}>
      <p>{title}</p>
      <Anchor href={href} className={classes.anchor} lineColor="white">
        {content}
      </Anchor>
    </li>
  )
}

export default Businesscard
