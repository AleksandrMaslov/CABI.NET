import React, { FC, ReactElement } from 'react'

import { useToggle } from 'src/hooks'

import classes from './Burger.module.css'

interface BurgerProps {
  children: ReactElement
  className?: string
}

const Burger: FC<BurgerProps> = ({ children, className }) => {
  const rootClasses = [classes.burger]
  if (className) rootClasses.push(className)

  const [opened, toggleOpened] = useToggle(false)

  const extendedChildren = React.cloneElement(children, {
    opened,
    toggleOpened,
  })

  return (
    <>
      {extendedChildren}

      <div className={rootClasses.join(' ')} onClick={toggleOpened}>
        <span className={classes.item} data-opened={opened}></span>
      </div>
    </>
  )
}

export default Burger
