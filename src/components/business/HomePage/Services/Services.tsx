import { SpaceCard } from 'cabinet_ui_kit'
import { FC, useEffect, useState } from 'react'

import { CategoriesEnum, tabs } from 'src/data'
import { IGroupedSpace } from 'src/models'
import { SpacesService } from 'src/services'

import {
  Breaker,
  FallbackCard,
  FramerSlider,
  PageIndicator,
  Tab,
  Tickers,
} from '../..'

import classes from './Services.module.css'

interface ServicesProps {
  className?: string
}

const Services: FC<ServicesProps> = ({ className }) => {
  const rootClasses = [classes.services]
  if (className) rootClasses.push(className)

  const [spaces, setSpaces] = useState<IGroupedSpace[]>([])
  const [filtered, setFiltered] = useState<IGroupedSpace[]>([])
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    setSpaces(SpacesService.getCommercial())
  }, [])

  useEffect(() => {
    handleFilterClick(CategoriesEnum.offices)
  }, [spaces])

  const handleFilterClick = (label: string) => {
    setFiltered(
      spaces.filter(space => {
        return CategoriesEnum[space.group] === label
      }),
    )
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="02" title="Услуги" />

        <h2>НАШЕ ПРОСТРАНСТВО</h2>

        <div className={classes.galery}>
          <div className={classes.tabs}>
            {tabs.map(label => (
              <Tab key={label} label={label} onClick={handleFilterClick} />
            ))}
          </div>

          <FramerSlider
            fallbackItem={<FallbackCard />}
            items={filtered}
            renderItem={(space: IGroupedSpace) => <SpaceCard space={space} />}
            setPage={setPage}
          />

          <PageIndicator current={page} total={filtered.length} />
        </div>

        <Tickers className={classes.tickers} />
      </div>
    </div>
  )
}

export default Services
