import { Icon } from 'cabinet_ui_kit'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import { Grid } from 'src/components/ui'
import { IAdvantage } from 'src/models'
import { AdvantagesService } from 'src/services'

import { Breaker } from '../..'

import classes from './Advantages.module.css'

interface AdvantagesProps {
  className?: string
}

interface AdvantageItemProps {
  advantage: IAdvantage
  index?: number
}

const variants = {
  hidden: { opacity: 0, y: -100 },

  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay * 0.1, bounce: 0 },
  }),
}

const Advantages: FC<AdvantagesProps> = ({ className }) => {
  const rootClasses = [classes.advantages]
  if (className) rootClasses.push(className)

  const [advantages, setAdvantges] = useState<IAdvantage[]>([])

  useEffect(() => {
    setAdvantges(AdvantagesService.getAll())
  }, [])

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="04" title="Комфорт" />

        <h2 className={classes.header}>
          ВСЕ ЧТО НУЖНО ДЛЯ&nbsp;КОМФОРТНОЙ РАБОТЫ
        </h2>

        <Grid
          items={advantages}
          renderItem={(item: IAdvantage, i?: number) => (
            <AdvantageItem key={item.title} advantage={item} index={i} />
          )}
          rows={3}
          cols={4}
          gap="3rem 4rem"
        />
      </div>
    </section>
  )
}

const AdvantageItem: FC<AdvantageItemProps> = ({ advantage, index }) => {
  const { icon, title, content } = advantage

  return (
    <motion.article
      className={classes.item}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      variants={variants}
      custom={index! % 4}
    >
      <Icon icon={icon} size="8.5rem" />

      <h4 className={classes.title}>{title}</h4>

      <p className={classes.content}>{content}</p>
    </motion.article>
  )
}

export default Advantages
