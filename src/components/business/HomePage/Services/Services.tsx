import { ISpace, SpaceCard } from 'cabinet_ui_kit'
import { FC } from 'react'

import Breaker from '../Breaker/Breaker'
import FramerSlider from '../FramerSlider/FramerSlider'
import Tickers from '../Tickers/Tickers'

import classes from './Services.module.css'

interface ServicesProps {
  className?: string
}

const Services: FC<ServicesProps> = ({ className }) => {
  const rootClasses = [classes.services]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="02" title="Услуги" />

        <h2>НАШЕ ПРОСТРАНСТВО</h2>

        <div className={classes.galery}>
          <FramerSlider
            items={spaces}
            renderItem={(space: ISpace) => <SpaceCard space={space} />}
          />
        </div>

        <Tickers className={classes.tickers} />
      </div>
    </div>
  )
}

export default Services

const space = {
  name: 'Енисей',
  img: 'https://placehold.jp/600x600.png',
  area: '26,8 м2',
  workspaces: '5-6',
  screen: true,
  ownMeeting: false,
  options: [
    'roundTheClock',
    'internetSpeed',
    'legalAddress',
    'freeMeeting',
    'printerScaner',
    'dailyCleaning',
  ],
  price: {
    monthly: 46000,
    quarterly: 120000,
    yearly: 560000,
  },
}

const spaces = [space, space, space]
