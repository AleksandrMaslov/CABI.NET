import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import { CategoriesEnum, tabs } from 'src/data'
import { IGroupedSpace } from 'src/models'

import classes from './Tabs.module.css'

interface TabsProps {
  items: IGroupedSpace[]
  setFiltered: (items: IGroupedSpace[]) => void
  className?: string
}

interface TabItemProps {
  label: string
  onClick: (label: string) => void
  selected?: boolean
}

const Tabs: FC<TabsProps> = ({ items, setFiltered, className }) => {
  const [selected, setSelected] = useState<string>('')

  const rootClasses = [classes.tabs]
  if (className) rootClasses.push(className)

  useEffect(() => {
    handleFilterClick(CategoriesEnum.offices)
  }, [items])

  const handleFilterClick = (label: string) => {
    setSelected(label)

    setFiltered(
      items.filter(item => {
        return CategoriesEnum[item.group] === label
      }),
    )
  }

  return (
    <div className={rootClasses.join(' ')}>
      {tabs.map(label => (
        <TabItem
          key={label}
          label={label}
          onClick={handleFilterClick}
          selected={selected === label}
        />
      ))}
    </div>
  )
}

const TabItem: FC<TabItemProps> = ({ label, onClick, selected }) => {
  return (
    <button className={classes.item} onClick={() => onClick(label)}>
      <h4 className={classes.label}>{label}</h4>

      {selected && (
        <motion.div
          className={classes.border}
          layoutId="tab"
          transition={{ duration: 0.1 }}
        />
      )}
    </button>
  )
}

export default Tabs
