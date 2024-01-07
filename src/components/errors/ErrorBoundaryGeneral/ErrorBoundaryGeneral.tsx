import { motion } from 'framer-motion'
import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

import { getErrorMessage } from 'src/utils'

import classes from './ErrorBoundaryGeneral.module.css'

const ErrorBoundaryGeneral: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <motion.section
      className={classes.errorBoundaryGeneral}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, bounce: 0 }}
    >
      <h3>Something Went Wrong</h3>
      <h5>Error: {getErrorMessage(error)}</h5>
      <h5 className={classes.reset} onClick={resetErrorBoundary}>
        REFRESH
      </h5>
    </motion.section>
  )
}

export default ErrorBoundaryGeneral
