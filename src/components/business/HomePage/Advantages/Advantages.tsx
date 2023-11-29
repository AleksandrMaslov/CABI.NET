import { FC } from 'react'

import classes from './Advantages.module.css'

interface AdvantagesProps {
  className?: string
}

const Advantages: FC<AdvantagesProps> = ({ className }) => {
  const rootClasses = [classes.advantages]
  if (className) rootClasses.push(className)

  return <div className={rootClasses.join(' ')}>Advantages</div>
}

export default Advantages
