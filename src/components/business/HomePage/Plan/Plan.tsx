import { FC } from 'react'

import classes from './Plan.module.css'

interface PlanProps {
  className?: string
}

const Plan: FC<PlanProps> = ({ className }) => {
  const rootClasses = [classes.plan]
  if (className) rootClasses.push(className)

  return <div className={rootClasses.join(' ')}>Plan</div>
}

export default Plan
