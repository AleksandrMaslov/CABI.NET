import { useEffect } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { LoginForm } from 'src/components/business/forms'
import {
  errorMessage,
  loginFailedMessage,
} from 'src/components/business/messages'
import { useAuth } from 'src/context/auth'
import { useModal } from 'src/context/modal'
import { IUser } from 'src/models'
import { RoutesEnum } from 'src/router/routes'
import { delay } from 'src/utils'

type TUseLoginForm = (
  navigate: NavigateFunction,
  navigatePrivate: () => void,
) => [(user?: IUser) => Promise<void>, () => Promise<void>]

const useLoginForm: TUseLoginForm = (navigate, navigatePrivate) => {
  const { openModal, closeModal } = useModal()
  const { user } = useAuth()

  const loginRequestSuccessHandler = async (user?: IUser) => {
    await closeModal()
    if (user) return
    openModal(loginFailedMessage)
    await delay(1000)
    await closeModal()
    openModal(<LoginForm {...{ navigate, navigatePrivate }} />)
  }

  const loginRequestErrorHandler = async () => {
    await closeModal()
    openModal(errorMessage)
  }

  const loginSuccessHandler = async () => {
    await closeModal()
    navigate(RoutesEnum.BOOKING)
  }

  useEffect(() => {
    if (!user) return
    loginSuccessHandler()
  }, [user])

  return [loginRequestSuccessHandler, loginRequestErrorHandler]
}

export default useLoginForm
