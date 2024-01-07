import { useFetch } from 'src/hooks'
import { ILoginData, IUser, TAuthListeners } from 'src/models'
import { ServerDummyService } from 'src/services'

type TUseFetchLogin = (args: {
  onError: ((error?: string | undefined) => Promise<void>) | undefined
  callback: ((data?: IUser | undefined) => Promise<void>) | undefined
}) => [
  (data?: ILoginData, listeners?: TAuthListeners) => Promise<void>,
  boolean | undefined,
]

const useFetchLogin: TUseFetchLogin = ({ onError, callback }) => {
  const [login, { isLoading: isLogging }] = useFetch<
    ILoginData,
    IUser | undefined
  >({
    query: async data => ServerDummyService.login(data!),
    onError,
    callback,
  })

  return [login, isLogging]
}

export default useFetchLogin
