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
    <div className={rootClasses.join(' ')}>
      <Breaker number="03" title="План коворкинга" />
      Plan
    </div>
  )
}

export default Plan
