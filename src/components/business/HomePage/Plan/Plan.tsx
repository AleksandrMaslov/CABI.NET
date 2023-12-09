import { Img, Marker } from 'cabinet_ui_kit'
import { FC, useEffect, useState } from 'react'

import { plan_bg } from 'src/assets'
import { IMarkerData } from 'src/models'
import { SpacesService } from 'src/services'

import { Breaker } from '../..'

import classes from './Plan.module.css'

interface PlanProps {
  className?: string
}

const Plan: FC<PlanProps> = ({ className }) => {
  const rootClasses = [classes.plan]
  if (className) rootClasses.push(className)

  const [markers, setMarkers] = useState<IMarkerData[]>([])

  useEffect(() => {
    setMarkers(SpacesService.getMarkersData())
  }, [])

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Breaker number="03" title="План коворкинга" />

        <div className={classes.wrapper}>
          <Img src={plan_bg} />

          {markers.map((props: IMarkerData) => (
            <Marker key={props.tooltip} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plan
