import { useState } from 'react'

import { IObject } from 'src/models'
import { getErrorMessage } from 'src/utils'

type UseFetchType = (
  callback: (params?: IObject) => Promise<void>,
  defaultLoading?: boolean,
) => [(params?: IObject) => Promise<void>, boolean, string]

const useFetch: UseFetchType = (callback, defaultLoading = false) => {
  const [isLoading, setLoading] = useState<boolean>(defaultLoading)
  const [error, setError] = useState<string>('')

  const fetch = async (params?: IObject) => {
    try {
      setLoading(true)
      setError('')
      await callback(params)
    } catch (error) {
      setError(getErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  return [fetch, isLoading, error]
}

export default useFetch
