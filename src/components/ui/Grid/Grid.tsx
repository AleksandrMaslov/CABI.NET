import { ReactNode } from 'react'

import classes from './Grid.module.css'

interface GridProps<T> {
  items: T[]
  renderItem: (item: T, index?: number) => ReactNode
  className?: string
}

function Grid<T>({ items, renderItem, className }: GridProps<T>) {
  const rootClasses = [classes.grid]
  if (className) rootClasses.push(className)

  return <div className={rootClasses.join(' ')}>{items.map(renderItem)}</div>
}

export default Grid
