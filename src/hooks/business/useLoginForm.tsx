import { useEffect } from 'react'

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

import { useCustomNavigate } from '..'

type TUseLoginForm = () => [
  (user?: IUser) => Promise<void>,
  () => Promise<void>,
]

const useLoginForm: TUseLoginForm = () => {
  const { openModal, closeModal } = useModal()
  const navigate = useCustomNavigate()
  const { user } = useAuth()

  const loginRequestSuccessHandler = async (user?: IUser) => {
    await closeModal()
    if (user) return
    openModal(loginFailedMessage)
    await delay(1000)
    await closeModal()
    openModal(<LoginForm />)
  }

  const loginRequestErrorHandler = async () => {
    await closeModal()
    openModal(errorMessage)
  }

  const loginSuccessHandler = async () => {
    navigate(RoutesEnum.BOOKING)
  }

  useEffect(() => {
    if (user) loginSuccessHandler()
  }, [user])

  return [loginRequestSuccessHandler, loginRequestErrorHandler]
}

export default useLoginForm
