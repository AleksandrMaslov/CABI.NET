import { FC } from 'react'

import classes from './ApplicationForm.module.css'

interface ApplicationFormProps {
  className?: string
}

const ApplicationForm: FC<ApplicationFormProps> = ({ className }) => {
  const rootClasses = [classes.applicationForm]
  if (className) rootClasses.push(className)

  return <form className={rootClasses.join(' ')}>ApplicationForm</form>
}

export default ApplicationForm
