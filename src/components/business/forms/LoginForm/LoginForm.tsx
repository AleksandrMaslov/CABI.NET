import { Anchor, Button, Checkbox, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler, useEffect, useState } from 'react'

import { useInput, useNavigate } from 'src/hooks'
import { useFormAuth, useFormLogin } from 'src/hooks/business'
import { RoutesEnum } from 'src/router/routes'

import classes from './LoginForm.module.css'

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const navigate = useNavigate()
  const rootClasses = [classes.loginForm]
  if (className) rootClasses.push(className)

  const [loginProps, loginSettings] = useInput({ isEmpty: true })
  const [passwordProps, passwordSettings] = useInput({ isEmpty: true })
  const [isRemember, setRemember] = useState<boolean>(false)
  const isFormNotValid = !loginSettings.isValid || !passwordSettings.isValid

  const [login, isLogging] = useFormLogin(isRemember)
  const [reauthorize, isAuthing] = useFormAuth(isRemember)
  const isLoading = isLogging || isAuthing

  const submitHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    login({
      login: loginProps.value,
      password: passwordProps.value,
    })
  }

  useEffect(() => {
    reauthorize({
      setLogin: loginProps.setValue,
      setPassword: passwordProps.setValue,
      setRemember,
    })
  }, [])

  return (
    <form className={rootClasses.join(' ')} onSubmit={submitHandler}>
      <h3 className={classes.title}>Вход в личный кабинет</h3>

      <Input
        label="Е-mail или номер телефон"
        placeholder="guest@mail.com*"
        name="username"
        id="login"
        bordered
        icon="cross"
        disabled={isLoading}
        {...loginProps}
      />

      <Input
        label="Пароль"
        name="password"
        id="password"
        bordered
        password
        icon="eye"
        disabled={isLoading}
        {...passwordProps}
      />

      <Button
        className={classes.btn}
        label="ОТПРАВИТЬ ЗАЯВКУ"
        disabled={isFormNotValid}
        isLoading={isLoading}
      />

      <div className={classes.wrapper}>
        <Checkbox
          label="Запомнить меня"
          id="remember"
          name="remember"
          disabled={isLoading}
          checked={isRemember}
          onChange={setRemember}
        />

        <div className={classes.links}>
          <Anchor
            className={classes.link}
            lineColor="orange"
            disabled={isLoading}
            onClick={() => navigate(RoutesEnum.RECOVER)}
          >
            Забыли пароль?
          </Anchor>

          <Anchor
            className={classes.link}
            lineColor="orange"
            disabled={isLoading}
            onClick={() => navigate(RoutesEnum.REGISTER)}
          >
            Регистрация
          </Anchor>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
