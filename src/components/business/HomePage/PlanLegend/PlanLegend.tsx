import { FC } from 'react'

import { CategoriesEnum } from 'src/data'
import { IGroupedSpace } from 'src/models'

import { Title } from '../..'

import classes from './PlanLegend.module.css'

interface PlanLegendProps {
  spaces: IGroupedSpace[]
  className?: string
}

const PlanLegend: FC<PlanLegendProps> = ({ spaces, className }) => {
  const rootClasses = [classes.planLegend]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      {Object.entries(CategoriesEnum).map(([key, category]) => (
        <article key={key}>
          <Title text={category} />

          <ul className={classes.list}>
            {spaces
              .filter(({ group }) => group === key)
              .map(({ name }) => {
                return (
                  <li key={name}>
                    <p>{name}</p>
                  </li>
                )
              })}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default PlanLegend
