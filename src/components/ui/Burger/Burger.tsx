import { FC } from 'react'

import classes from './Burger.module.css'

interface BurgerProps {
  isOpened: boolean
  toggleOpened: () => void
  className?: string
}

const Burger: FC<BurgerProps> = ({ isOpened, toggleOpened, className }) => {
  const rootClasses = [classes.burger]
  if (className) rootClasses.push(className)

  return (
    <span className={rootClasses.join(' ')} onClick={toggleOpened}>
      <span className={classes.item} data-opened={isOpened} />
    </span>
  )
}

export default Burger
