import { ReactNode, useContext } from 'react'

import { LoginForm, Message } from 'src/components/business'
import { ModalContext } from 'src/context'
import { IAuthData, IUser } from 'src/models'
import { delay } from 'src/utils'

import useLocalStorage from '../useLocalStorage'

const fakePassword = 'XXXXXXXXXX'

const errorMsg = (
  <Message title="Произошла ошибка!" content="Обратитесь в службу поддержки." />
)

interface IReauthtorizeArgs {
  setLogin: (value: string) => void
  setPassword: (value: string) => void
  setRemember: (value: boolean) => void
  authCallback: (data: IAuthData) => Promise<void>
}

type TUseAuthorization = (
  isRemember: boolean,
) => [
  authorizationRequestHandler: (
    user: IUser | undefined,
    msg: ReactNode,
  ) => Promise<void>,
  authorizationRequestErrorHandler: () => Promise<void>,
  reauthorize: (args: IReauthtorizeArgs) => void,
]

const useAuthorization: TUseAuthorization = isRemember => {
  const { openModal, closeModal } = useContext(ModalContext)

  const {
    value: localUser,
    saveValue: saveLocalUser,
    removeValue: removeLocalUser,
  } = useLocalStorage<IUser>('user')

  const authorizationRequestHandler = async (
    user: IUser | undefined,
    msg: ReactNode,
  ) => {
    await closeModal()
    if (!user) return authorizationErrorHandler(msg)
    if (isRemember && user !== localUser) saveLocalUser(user)
    //TODO: navigate - личный кабинет
  }

  const authorizationRequestErrorHandler = async () => {
    await closeModal()
    openModal(errorMsg)
  }

  const authorizationErrorHandler = async (msg: ReactNode) => {
    removeLocalUser()
    openModal(msg)
    await delay(1000)
    await closeModal()
    return openModal(<LoginForm />)
  }

  const reauthorize = ({
    setLogin,
    setPassword,
    setRemember,
    authCallback,
  }: IReauthtorizeArgs) => {
    if (!localUser) return
    const { login, token } = localUser
    setLogin(login)
    setPassword(fakePassword)
    setRemember(true)
    authCallback({ token })
  }

  return [
    authorizationRequestHandler,
    authorizationRequestErrorHandler,
    reauthorize,
  ]
}

export default useAuthorization
