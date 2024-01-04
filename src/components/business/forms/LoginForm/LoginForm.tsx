import { Anchor, Button, Checkbox, Input } from 'cabinet_ui_kit'
import {
  FC,
  FormEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { ModalContext } from 'src/context'
import { useFetch, useInput } from 'src/hooks'
import useLocalStorage from 'src/hooks/useLocalStorage'
import { IAuthData, ILoginData, IUser } from 'src/models'
import { ServerDummyService } from 'src/services'
import { delay } from 'src/utils'

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

const authErrorMsg = (
  <Message
    title="Ошибка авторизации."
    content="Попробуйте авторизироваться еще раз."
  />
)

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

  const {
    value: localUser,
    saveValue: saveUser,
    removeValue: removeUser,
  } = useLocalStorage<IUser>('user')

  const authorizationRequestHandler = async (
    user: IUser | undefined,
    msg: ReactNode,
  ) => {
    await closeModal()
    if (!user) return authorizationErrorHandler(msg)
    if (isRemember && user !== localUser) saveUser(user)
    //TODO: navigate - личный кабинет
  }

  const authorizationErrorHandler = async (msg: ReactNode) => {
    removeUser()
    openModal(msg)
    await delay(1000)
    await closeModal()
    return openModal(<LoginForm />)
  }

  const authorizationRequestErrorHandler = async () => {
    await closeModal()
    openModal(errorMsg)
  }

  const [login, { isLoading: isLogging }] = useFetch<
    ILoginData,
    IUser | undefined
  >({
    query: async data => ServerDummyService.login(data!),
    callback: async user => authorizationRequestHandler(user, loginErrorMsg),
    onError: authorizationRequestErrorHandler,
  })

  const [auth, { isLoading: isAuthing }] = useFetch<
    IAuthData,
    IUser | undefined
  >({
    query: async data => ServerDummyService.auth(data!),
    callback: async user => authorizationRequestHandler(user, authErrorMsg),
    onError: authorizationRequestErrorHandler,
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
