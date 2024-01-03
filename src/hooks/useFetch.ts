import { useState } from 'react'

import { IObject } from 'src/models'
import { getErrorMessage } from 'src/utils'

interface IFetchState<T> {
  isLoading?: boolean
  error?: string
  data?: T
}

type TFetchArgs<T> = [
  callback: (params?: IObject) => Promise<T>,
  defaultState?: IFetchState<T>,
]

type TFetchResult<T> = [(params?: IObject) => Promise<void>, IFetchState<T>]

function useFetch<T>(
  ...[callback, defaultState = {}]: TFetchArgs<T>
): TFetchResult<T> {
  const [state, setState] = useState<IFetchState<T>>(defaultState)

  const fetch = async (params?: IObject) => {
    try {
      setState({ isLoading: true })

      const data = await callback(params)
      setState({
        data,
      })
    } catch (error) {
      setState({
        error: getErrorMessage(error),
      })
    }
  }

  return [fetch, state]
}

export default useFetch
