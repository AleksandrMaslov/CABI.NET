import { motion } from 'framer-motion'
import { useRouteError } from 'react-router-dom'

import { getErrorMessage } from 'src/utils'

import classes from './ErrorRouteElement.module.css'

export default function ErrorRouteElement() {
  const error = useRouteError()

  return (
    <motion.section
      className={classes.errorRouteElement}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, bounce: 0 }}
    >
      <h3>Something Went Wrong</h3>
      <h5>Error: {getErrorMessage(error)}</h5>
    </motion.section>
  )
}
