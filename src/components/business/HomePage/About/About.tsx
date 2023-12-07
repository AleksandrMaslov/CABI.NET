import { Img } from 'cabinet_ui_kit'
import { FC } from 'react'

import { about_img } from 'src/assets'

import Breaker from '../Breaker/Breaker'
import Title from '../Title/Title'

import classes from './About.module.css'

interface AboutProps {
  className?: string
}

const About: FC<AboutProps> = ({ className }) => {
  const rootClasses = [classes.about]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="01" title="Кто мы" />

        <div className={classes.content}>
          <Title className={classes.title} text="ИДЕАЛЬНОЕ ПРОСТРАНСТВО" />

          <Img className={classes.img} src={about_img} />

          <div className={classes.wrapper}>
            <h2>О НАС</h2>

            <p className={classes.text}>
              Мы предоставляем функциональное пространство для комфортной
              работы, совмещающее в себе изолированные офисы для команд,
              переговорные, лекторий и рабочие места в опенспейсе. А так же
              гибкие условия аренды, которые идеально подойдут для компаний,
              трансформирующихся под влиянием современной бизнес-реальности.
              Удобная локация – 10 минут от станции метро Новые Черемушки
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
