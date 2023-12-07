import { FC } from 'react'

import classes from './Cover.module.css'

interface CoverProps {
  className?: string
}

const Cover: FC<CoverProps> = ({ className }) => {
  const rootClasses = [classes.cover]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <h4 className={`${classes.lightgreen} ${classes.light}`}>
        КОВОРКИНГ ЯВЛЯЕТСЯ ПРОВОДНИКОМ ПЕРЕМЕН И ОТВЕТОМ НА&nbsp;ОБЩЕСТВЕННЫЕ
        ПОТРЕБНОСТИ. ЭТО МЕСТО ГДЕ В ОДНОМ ОБЩЕМ ПРОСТРАНСТВЕ ОБЪЕДИНЯЮТСЯ ЛЮДИ
        С РАЗНОЙ ЗАНЯТОСТЬЮ ДЛЯ ОБЩЕНИЯ И&nbsp;ТВОРЧЕСКОГО ВЗАИМОДЕЙСТВИЯ
      </h4>

      <h3 className={`${classes.black} ${classes.centered} ${classes.light}`}>
        435м2
      </h3>

      <div className={`${classes.orange} ${classes.centered}`}>
        <h3 className={classes.light}>7</h3>
        <p className={`${classes.content} ${classes.light}`}>смарт-офисов</p>
      </div>

      <div className={`${classes.blue} ${classes.centered}`}>
        <h3 className={classes.light}>2</h3>
        <p className={`${classes.content} ${classes.light}`}>переговорных</p>
      </div>

      <div className={`${classes.green} ${classes.centered}`}>
        <h3 className={classes.light}>20</h3>
        <p className={`${classes.content} ${classes.light}`}>
          рабочих мест в&nbsp;опенспейсах
        </p>
      </div>
    </div>
  )
}

export default Cover
