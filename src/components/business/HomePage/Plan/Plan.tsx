import { FC } from 'react'

import Breaker from '../Breaker/Breaker'

import classes from './Plan.module.css'

interface PlanProps {
  className?: string
}

const Plan: FC<PlanProps> = ({ className }) => {
  const rootClasses = [classes.plan]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="03" title="План коворкинга" />
        Plan
      </div>
    </section>
  )
}

export default Plan
