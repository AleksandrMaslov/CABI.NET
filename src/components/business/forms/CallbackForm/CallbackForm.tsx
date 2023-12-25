import { FC } from 'react'

import classes from './CallbackForm.module.css'

interface CallbackFormProps {
  className?: string
}

const CallbackForm: FC<CallbackFormProps> = ({ className }) => {
  const rootClasses = [classes.callbackForm]
  if (className) rootClasses.push(className)

  return <form className={rootClasses.join(' ')}>CallbackForm</form>
}

export default CallbackForm
