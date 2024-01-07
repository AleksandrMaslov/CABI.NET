import { useFetch } from 'src/hooks'
import { IAuthData, IListeners, IUser } from 'src/models'
import { ServerDummyService } from 'src/services'

type TUseFetchAuth = (args: {
  onError: ((error?: string | undefined) => Promise<void>) | undefined
  callback: ((data?: IUser | undefined) => Promise<void>) | undefined
}) => [
  (data?: IAuthData, listeners?: IListeners) => Promise<void>,
  boolean | undefined,
]

const useFetchAuth: TUseFetchAuth = ({ onError, callback }) => {
  const [auth, { isLoading: isAuthing }] = useFetch<
    IAuthData,
    IUser | undefined
  >({
    query: async data => ServerDummyService.authorize(data!),
    onError,
    callback,
  })

  return [auth, isAuthing]
}

export default useFetchAuth
