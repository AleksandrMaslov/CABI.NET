import { Anchor, Button, Checkbox, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler, useContext, useState } from 'react'

import { ModalContext } from 'src/context'
import { useFetch, useInput } from 'src/hooks'
import { ILogin, IUser } from 'src/models'
import { ServerDummyService } from 'src/services'
import { isInterfaceInstance } from 'src/utils'

import { Message } from '../..'

import classes from './LoginForm.module.css'

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { openModal, closeModal } = useContext(ModalContext)

  const rootClasses = [classes.loginForm]
  if (className) rootClasses.push(className)

  const [loginProps, loginSettings] = useInput({ isEmpty: true })
  const [passwordProps, passwordSettings] = useInput({ isEmpty: true })
  const [isRemember, setRemember] = useState<boolean>(false)

  const [login, { isLoading, error, data: user }] = useFetch<IUser | null>(
    async data => {
      if (!isInterfaceInstance<ILogin>(data))
        throw new Error('Login data error.')
      return ServerDummyService.login(data)
    },
  )

  const submitHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    if (isLoading) return

    await login({
      login: loginProps.value,
      password: passwordProps.value,
    })

    await closeModal()

    //TODO: не обрабатывает ошибку из-за асинхронности стейта
    if (error)
      return openModal(
        <Message
          title="Произошла ошибка!"
          content="Обратитесь в службу поддержки."
        />,
      )

    if (!user)
      return openModal(
        <Message
          title="Ошибка авторизации."
          content="Убедитесь, что указанные данные верны."
        />,
      )

    if (isRemember) {
      //TODO: сохранить токен в localStorage
    }

    //TODO: navigate - личный кабинет
  }

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
        isLoading={isLoading}
        disabled={!loginSettings.isValid || !passwordSettings.isValid}
      />

      <div className={classes.wrapper}>
        <Checkbox
          label="Запомнить меня"
          id="remember"
          name="remember"
          onChange={setRemember}
        />

        <div className={classes.links}>
          {/* TODO: recovery route or modal*/}
          <Anchor className={classes.link} lineColor="orange">
            Забыли пароль?
          </Anchor>

          {/* TODO: registration route or modal*/}
          <Anchor className={classes.link} lineColor="orange">
            Регистрация
          </Anchor>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
