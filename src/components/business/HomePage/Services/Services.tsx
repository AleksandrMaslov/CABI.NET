import { SpaceCard } from 'cabinet_ui_kit'
import { FC, useEffect, useState } from 'react'

import { FramerSlider, PageIndicator } from 'src/components/ui'
import { IGroupedSpace } from 'src/models'
import { SpacesService } from 'src/services'
import { cacheImgs } from 'src/utils'

import { Breaker, FallbackCard, Tabs, Tickers } from '../..'

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
    const spaces = SpacesService.getCommercial()
    setSpaces(spaces)
    cacheImgs(spaces.map(space => space.img))
  }, [])

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.container} id="services">
        <Breaker number="02" title="Услуги" />

        <h2 className={classes.header}>НАШЕ ПРОСТРАНСТВО</h2>

        <div className={classes.galery}>
          <Tabs items={spaces} setFiltered={setFiltered} />

          <FramerSlider
            className={classes.slider}
            fallbackItem={<FallbackCard />}
            items={filtered}
            renderItem={(space: IGroupedSpace) => <SpaceCard space={space} />}
            setPage={setPage}
          />

          <PageIndicator
            className={classes.indicator}
            current={page}
            total={filtered.length}
          />
        </div>

        <Tickers className={classes.tickers} />
      </div>
    </div>
  )
}

export default Services
