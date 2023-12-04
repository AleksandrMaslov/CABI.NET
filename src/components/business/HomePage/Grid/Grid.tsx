import { ReactNode } from 'react'

import classes from './Grid.module.css'

interface GridProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  rows: number
  cols: number
  gap: string
  className?: string
}

function Grid<T>({
  items,
  renderItem,
  rows,
  cols,
  gap,
  className,
}: GridProps<T>) {
  const rootClasses = [classes.grid]
  if (className) rootClasses.push(className)

  return (
    <div
      className={rootClasses.join(' ')}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap,
      }}
    >
      {items.map(renderItem)}
    </div>
  )
}

export default Grid
