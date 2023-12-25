import { FC } from 'react'

import classes from './LoginForm.module.css'

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const rootClasses = [classes.loginForm]
  if (className) rootClasses.push(className)

  return <form className={rootClasses.join(' ')}>LoginForm</form>
}

export default LoginForm
