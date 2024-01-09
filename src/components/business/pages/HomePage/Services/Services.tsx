import { SpaceCard } from 'cabinet_ui_kit'
import { FC, useEffect, useState } from 'react'

import { ApplicationForm, LoginForm } from 'src/components/business/forms'
import {
  Breaker,
  FallbackCard,
  FramerSlider,
  PageIndicator,
} from 'src/components/ui'
import { useAuth } from 'src/context/auth'
import { useModal } from 'src/context/modal'
import { useNavigatePrivate } from 'src/hooks'
import { IGroupedSpace } from 'src/models'
import { RoutesEnum } from 'src/router/routes'
import { SpacesServiceDummy } from 'src/services'
import { cacheImgs } from 'src/utils'

import { Tabs, Tickers } from '..'

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

  const navigation = useNavigatePrivate(RoutesEnum.BOOKING)
  const { openModal } = useModal()
  const { user } = useAuth()

  useEffect(() => {
    SpacesServiceDummy.getCommercial().then(spaces => {
      cacheImgs(spaces.map(space => space.img))
      setSpaces(spaces)
    })
  }, [])

  const requestBtnClickHandler = () => openModal(<ApplicationForm />)

  const bookBtnClickHandler = () => {
    if (user) return navigation.navigatePrivate()
    openModal(<LoginForm {...navigation} />)
  }

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container} id="services">
        <Breaker number="02" title="Услуги" />

        <h2 className={classes.header}>НАШЕ ПРОСТРАНСТВО</h2>

        <div className={classes.galery}>
          <Tabs items={spaces} setFiltered={setFiltered} />

          <FramerSlider
            className={classes.slider}
            setPage={setPage}
            fallbackItem={<FallbackCard />}
            items={filtered}
            renderItem={(space: IGroupedSpace) => (
              <SpaceCard
                space={space}
                onBookClick={bookBtnClickHandler}
                onRequestClick={requestBtnClickHandler}
              />
            )}
          />

          <PageIndicator
            className={classes.indicator}
            current={page}
            total={filtered.length}
          />
        </div>

        <Tickers className={classes.tickers} />
      </div>
    </section>
  )
}

export default Services
