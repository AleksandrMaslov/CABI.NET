import { Img } from 'cabinet_ui_kit'
import { FC } from 'react'

import { request_bg } from 'src/assets/home'

import { RequestForm } from '../..'

import classes from './Request.module.css'

interface RequestProps {
  className?: string
}

const Request: FC<RequestProps> = ({ className }) => {
  const rootClasses = [classes.request]
  if (className) rootClasses.push(className)

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <div className={classes.side}>
          <div className={classes.text}>CAB</div>
        </div>

        <div className={classes.square}></div>

        <RequestForm className={classes.form}></RequestForm>

        <Img className={classes.img} src={request_bg} />
      </div>
    </section>
  )
}

export default Request
