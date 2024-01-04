import { useState } from 'react'

import { getErrorMessage } from 'src/utils'

interface IFetchState<T> {
  isLoading?: boolean
  error?: string
  data?: T
}

interface IFetchArgs<I, T> {
  query: (data?: I) => Promise<T>
  callback?: (data?: T) => Promise<void>
  onError?: () => Promise<void>
}

type TFetchResult<I, T> = [(data: I) => Promise<void>, IFetchState<T>]

function useFetch<I, T>({
  query,
  callback,
  onError,
}: IFetchArgs<I, T>): TFetchResult<I, T> {
  const [state, setState] = useState<IFetchState<T>>({})

  const submit = async (data: I) => {
    try {
      setState({ isLoading: true })
      const response = await query(data)
      setState({ data: response })

      if (callback) await callback(response)
    } catch (error) {
      setState({ error: getErrorMessage(error) })

      if (onError) await onError()
    } finally {
      setState(prev => ({ ...prev, isLoading: false }))
    }
  }

  return [submit, state]
}

export default useFetch
