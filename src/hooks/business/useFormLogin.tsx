import { Message } from 'src/components/business'
import { ILoginData, IUser } from 'src/models'
import { ServerDummyService } from 'src/services'

import { useFetch } from '..'

import { useAuthorization } from '.'

const loginErrorMsg = (
  <Message
    title="Ошибка авторизации."
    content="Убедитесь, что указанные данные верны."
  />
)

type TUseFormLogin = (
  isRemember: boolean,
) => [
  login: (data: ILoginData) => Promise<void>,
  isLogging: boolean | undefined,
]

const useFormLogin: TUseFormLogin = isRemember => {
  const [authorizationRequestHandler, authorizationRequestErrorHandler] =
    useAuthorization(isRemember)

  const [login, { isLoading: isLogging }] = useFetch<
    ILoginData,
    IUser | undefined
  >({
    query: async data => ServerDummyService.login(data!),
    callback: async user => authorizationRequestHandler(user, loginErrorMsg),
    onError: authorizationRequestErrorHandler,
  })

  return [login, isLogging]
}

export default useFormLogin
