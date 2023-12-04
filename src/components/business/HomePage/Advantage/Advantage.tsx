import { Icon } from 'cabinet_ui_kit'
import { FC } from 'react'

import { IAdvantage } from 'src/models'

import classes from './Advantage.module.css'

interface AdvantageProps {
  advantage: IAdvantage
  className?: string
}

const Advantage: FC<AdvantageProps> = ({ advantage, className }) => {
  const rootClasses = [classes.advantage]
  if (className) rootClasses.push(className)

  const { icon, title, content } = advantage

  return (
    <article className={rootClasses.join(' ')}>
      <Icon icon={icon} size="8.5rem" />

      <h4 className={classes.title}>{title}</h4>

      <p className={classes.content}>{content}</p>
    </article>
  )
}

export default Advantage
