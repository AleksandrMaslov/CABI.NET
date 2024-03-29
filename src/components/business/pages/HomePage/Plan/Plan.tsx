import { Img, Marker } from '@aleksandrmaslov/cabinet_ui_kit'
import { FC, useEffect, useState } from 'react'

import { plan_bg } from 'src/assets/home'
import { Breaker } from 'src/components/ui'
import { IGroupedSpace, IMarkerData } from 'src/models'
import { SpacesServiceDummy } from 'src/services'
import { getSpaceMarkerData } from 'src/utils'

import { PlanLegend } from '..'

import classes from './Plan.module.css'

interface PlanProps {
  className?: string
}

const Plan: FC<PlanProps> = ({ className }) => {
  const rootClasses = [classes.plan]
  if (className) rootClasses.push(className)

  const [spaces, setSpaces] = useState<IGroupedSpace[]>([])

  useEffect(() => {
    SpacesServiceDummy.getAll().then(setSpaces)
  }, [])

  return (
    <section className={rootClasses.join(' ')}>
      <div className={classes.container} id="plan">
        <Breaker number="03" title="План коворкинга" />

        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Img src={plan_bg} />

            {spaces.map(getSpaceMarkerData).map((props: IMarkerData) => (
              <Marker
                className={classes.marker}
                key={props.tooltip}
                {...props}
              />
            ))}
          </div>

          <PlanLegend className={classes.legend} spaces={spaces} />
        </div>
      </div>
    </section>
  )
}

export default Plan
