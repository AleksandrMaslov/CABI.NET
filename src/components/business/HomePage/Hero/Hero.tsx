import { Img } from 'cabinet_ui_kit'
import { FC } from 'react'

import { hero_img } from 'src/assets'

import { Cover, Title } from '../..'

import classes from './Hero.module.css'

interface HeroProps {
  className?: string
}

const Hero: FC<HeroProps> = ({ className }) => {
  const rootClasses = [classes.hero]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Img className={classes.img} src={hero_img} />

          <Title className={classes.title} text="КОВОРКИНГ НА ЮГЕ МОСКВЫ" />

          <h1 className={classes.header}>
            САМЫЕ ЛУЧШИЕ КВАДРАТНЫЕ МЕТРЫ В&nbsp;ГОРОДЕ.
          </h1>
        </div>

        <Cover />
      </div>
    </section>
  )
}

export default Hero
