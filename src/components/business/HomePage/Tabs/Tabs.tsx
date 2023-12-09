import { FC, useEffect } from 'react'

import { CategoriesEnum, tabs } from 'src/data'
import { IGroupedSpace } from 'src/models'

import { Tab } from '../..'

import classes from './Tabs.module.css'

interface TabsProps {
  items: IGroupedSpace[]
  setFiltered: (items: IGroupedSpace[]) => void
  className?: string
}

const Tabs: FC<TabsProps> = ({ items, setFiltered, className }) => {
  const rootClasses = [classes.tabs]
  if (className) rootClasses.push(className)

  useEffect(() => {
    handleFilterClick(CategoriesEnum.offices)
  }, [items])

  const handleFilterClick = (label: string) => {
    setFiltered(
      items.filter(item => {
        return CategoriesEnum[item.group] === label
      }),
    )
  }

  return (
    <div className={rootClasses.join(' ')}>
      {tabs.map(label => (
        <Tab key={label} label={label} onClick={handleFilterClick} />
      ))}
    </div>
  )
}

export default Tabs
