import { FC } from 'react'

import classes from './Request.module.css'

interface RequestProps {
  className?: string
}

const Request: FC<RequestProps> = ({ className }) => {
  const rootClasses = [classes.request]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.container}>Request</div>
    </div>
  )
}

export default Request
