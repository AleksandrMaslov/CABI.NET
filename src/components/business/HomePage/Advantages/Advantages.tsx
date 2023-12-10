import { Icon } from 'cabinet_ui_kit'
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
          renderItem={(item: IAdvantage) => (
            <AdvantageItem key={item.title} advantage={item} />
          )}
          rows={3}
          cols={4}
          gap="3rem 4rem"
        />
      </div>
    </section>
  )
}

const AdvantageItem: FC<AdvantageItemProps> = ({ advantage }) => {
  const { icon, title, content } = advantage

  return (
    <article className={classes.item}>
      <Icon icon={icon} size="8.5rem" />

      <h4 className={classes.title}>{title}</h4>

      <p className={classes.content}>{content}</p>
    </article>
  )
}

export default Advantages
