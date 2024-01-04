import { FC } from 'react'

import classes from './TempBlock.module.css'

interface TempBlockProps {
  title: string
  className?: string
}

const TempBlock: FC<TempBlockProps> = ({ title, className }) => {
  const rootClasses = [classes.tempBlock]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <h2>{title}</h2>
      <p>This page is under construction.</p>
      <p>Please be patient.</p>
    </section>
  )
}

export default TempBlock
