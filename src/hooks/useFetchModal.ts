import { ReactNode, useContext, useState } from 'react'

import { ModalContext } from 'src/context'
import { IFetchState } from 'src/models'

interface IFetchModalArgs<I, T> {
  query: (data?: I) => Promise<T>
  successMsg?: ReactNode
  errorMsg?: ReactNode
  callback?: (data?: T) => void
}

type TFetchModalResult<I, T> = [(data: I) => Promise<void>, IFetchState<T>]

function useFetchModal<I, T>({
  query,
  successMsg,
  errorMsg,
  callback,
}: IFetchModalArgs<I, T>): TFetchModalResult<I, T> {
  const { openModal, closeModal } = useContext(ModalContext)

  const [state, setState] = useState<IFetchState<T>>({})

  const submit = async (data: I) => {
    try {
      setState({ isLoading: true })
      const response = await query(data)
      await closeModal()

      if (successMsg) openModal(successMsg)
      if (callback) callback(response)
    } catch (error) {
      await closeModal()
      if (errorMsg) openModal(errorMsg)
    } finally {
      setState(prev => ({ ...prev, isLoading: false }))
    }
  }

  return [submit, state]
}

export default useFetchModal
