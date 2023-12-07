import { FC, useEffect, useState } from 'react'

import { IAdvantage } from 'src/models'
import { AdvantagesService } from 'src/services'

import Advantage from '../Advantage/Advantage'
import Breaker from '../Breaker/Breaker'
import Grid from '../Grid/Grid'

import classes from './Advantages.module.css'

interface AdvantagesProps {
  className?: string
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
            <Advantage key={item.title} advantage={item} />
          )}
          rows={3}
          cols={4}
          gap="3rem 4rem"
        />
      </div>
    </section>
  )
}

export default Advantages
