import { Anchor, Button, Checkbox, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler, useContext, useEffect, useState } from 'react'

import { ModalContext } from 'src/context'
import { useFetchModal, useInput } from 'src/hooks'
import useLocalStorage from 'src/hooks/useLocalStorage'
import { IAuthData, ILoginData, IUser } from 'src/models'
import { ServerDummyService } from 'src/services'

import { Message } from '../..'

import classes from './LoginForm.module.css'

const errorMsg = (
  <Message title="Произошла ошибка!" content="Обратитесь в службу поддержки." />
)

const loginErrorMsg = (
  <Message
    title="Ошибка авторизации."
    content="Убедитесь, что указанные данные верны."
  />
)

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { openModal, closeModal } = useContext(ModalContext)

  const rootClasses = [classes.loginForm]
  if (className) rootClasses.push(className)

  const {
    value: localUser,
    saveValue: saveUser,
    removeValue: removeUser,
  } = useLocalStorage<IUser>('user')

  const [loginProps, loginSettings] = useInput({ isEmpty: true })
  const [passwordProps, passwordSettings] = useInput({ isEmpty: true })
  const [isRemember, setRemember] = useState<boolean>(false)

  const callback = (user: IUser | undefined) => {
    if (!user) {
      removeUser()
      return openModal(loginErrorMsg)
    }
    if (isRemember) saveUser(user)

    //TODO: navigate - личный кабинет
  }

  const [login, { isLoading: isLogging }] = useFetchModal<
    ILoginData,
    IUser | undefined
  >({
    query: async data => {
      return ServerDummyService.login(data!)
    },
    callback,
    errorMsg,
  })

  const [auth, { isLoading: isAuthing }] = useFetchModal<
    IAuthData,
    IUser | undefined
  >({
    query: async data => {
      return ServerDummyService.auth(data!)
    },
    callback,
    errorMsg,
  })

  const submitHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    login({
      login: loginProps.value,
      password: passwordProps.value,
    })
  }

  useEffect(() => {
    if (!localUser) return
    const { login, token } = localUser
    loginProps.setValue(login)
    passwordProps.setValue('XXXXXXXXXX')
    setRemember(true)
    auth({ token })
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
        disabled={isLogging || isAuthing}
        {...loginProps}
      />

      <Input
        label="Пароль"
        name="password"
        id="password"
        bordered
        password
        icon="eye"
        disabled={isLogging || isAuthing}
        {...passwordProps}
      />

      <Button
        className={classes.btn}
        label="ОТПРАВИТЬ ЗАЯВКУ"
        isLoading={isLogging || isAuthing}
        disabled={!loginSettings.isValid || !passwordSettings.isValid}
      />

      <div className={classes.wrapper}>
        <Checkbox
          label="Запомнить меня"
          id="remember"
          name="remember"
          checked={isRemember}
          onChange={setRemember}
          // TODO: disabled property
          // disabled={isLogging || isAuthing}
        />

        <div className={classes.links}>
          <Anchor
            className={classes.link}
            lineColor="orange"
            // TODO: recovery route or modal
            // TODO: disabled property
          >
            Забыли пароль?
          </Anchor>

          <Anchor
            className={classes.link}
            lineColor="orange"
            // TODO: recovery route or modal
            // TODO: disabled property
          >
            Регистрация
          </Anchor>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
