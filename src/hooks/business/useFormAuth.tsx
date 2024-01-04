import { Message } from 'src/components/business'
import { IAuthData, IUser } from 'src/models'
import { ServerDummyService } from 'src/services'

import { useFetch } from '..'

import { useAuthorization } from '.'

const authErrorMsg = (
  <Message
    title="Ошибка авторизации."
    content="Попробуйте авторизироваться еще раз."
  />
)

interface IReauthtorizeArgs {
  setLogin: (value: string) => void
  setPassword: (value: string) => void
  setRemember: (value: boolean) => void
}

type TUseFormAuth = (
  isRemember: boolean,
) => [
  reauthorize: (args: IReauthtorizeArgs) => void,
  isAuthing: boolean | undefined,
]

const useFormAuth: TUseFormAuth = isRemember => {
  const [
    authorizationRequestHandler,
    authorizationRequestErrorHandler,
    reauthorizeFn,
  ] = useAuthorization(isRemember)

  const [auth, { isLoading: isAuthing }] = useFetch<
    IAuthData,
    IUser | undefined
  >({
    query: async data => ServerDummyService.auth(data!),
    callback: async user => authorizationRequestHandler(user, authErrorMsg),
    onError: authorizationRequestErrorHandler,
  })

  const reauthorize = (args: IReauthtorizeArgs) => {
    reauthorizeFn({ ...args, authCallback: auth })
  }

  return [reauthorize, isAuthing]
}

export default useFormAuth
