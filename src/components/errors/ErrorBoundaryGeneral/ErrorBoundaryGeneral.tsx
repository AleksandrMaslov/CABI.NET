import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

import { getErrorMessage } from 'src/utils'

import classes from './ErrorBoundaryGeneral.module.css'

const ErrorBoundaryGeneral: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className={classes.errorBoundaryGeneral}>
      <p>Something Went Wrong</p>

      <p className={classes.reset} onClick={resetErrorBoundary}>
        REFRESH
      </p>

      <p>Error: {getErrorMessage(error)}</p>
    </div>
  )
}

export default ErrorBoundaryGeneral
