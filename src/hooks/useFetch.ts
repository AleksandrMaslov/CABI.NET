import { useState } from 'react'

import { IListeners } from 'src/models'
import { getErrorMessage } from 'src/utils'

interface IFetchState<T> {
  isLoading?: boolean
  error?: string
  data?: T
}

interface IFetchArgs<I, T> {
  query: (data?: I, listeners?: IListeners<T>) => Promise<T>
  callback?: (data?: T) => Promise<void>
  onError?: (error?: string) => Promise<void>
}

type TFetchResult<I, T> = [
  (data?: I, listeners?: IListeners<T>) => Promise<void>,
  IFetchState<T>,
]

function useFetch<I, T>({
  query,
  callback,
  onError,
}: IFetchArgs<I, T>): TFetchResult<I, T> {
  const [state, setState] = useState<IFetchState<T>>({})

  const fetch = async (data?: I, listeners?: IListeners<T>) => {
    try {
      setState({ isLoading: true })
      const response = await query(data)
      setState({ data: response })

      if (listeners?.onSuccess) await listeners.onSuccess(response)
      if (callback) await callback(response)
    } catch (error) {
      const msg = getErrorMessage(error)
      setState({ error: msg })

      if (listeners?.onError) await listeners?.onError(msg)
      if (onError) await onError(msg)
    } finally {
      setState(prev => ({ ...prev, isLoading: false }))
    }
  }

  return [fetch, state]
}

export default useFetch
