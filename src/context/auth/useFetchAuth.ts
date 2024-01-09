import { useFetch } from 'src/hooks'
import { IAuthData, IUser, TAuthListeners } from 'src/models'
import { AuthServiceDummy } from 'src/services'

type TUseFetchAuth = (args: {
  onError: ((error?: string | undefined) => Promise<void>) | undefined
  callback: ((data?: IUser | undefined) => Promise<void>) | undefined
}) => [
  (data?: IAuthData, listeners?: TAuthListeners) => Promise<void>,
  boolean | undefined,
]

const useFetchAuth: TUseFetchAuth = ({ onError, callback }) => {
  const [auth, { isLoading: isAuthing }] = useFetch<
    IAuthData,
    IUser | undefined
  >({
    query: async data => AuthServiceDummy.authorize(data!),
    onError,
    callback,
  })

  return [auth, isAuthing]
}

export default useFetchAuth
