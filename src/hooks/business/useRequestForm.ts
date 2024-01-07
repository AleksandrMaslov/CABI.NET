import {
  applicationSuccessMessage,
  errorMessage,
} from 'src/components/business/messages'
import { useModal } from 'src/context/modal'
import { IApplicationData, IListeners } from 'src/models'
import { ServerDummyService } from 'src/services'

import { useFetch } from '..'

type TUseRequestForm = () => [
  (data: IApplicationData, listeners?: IListeners<void>) => Promise<void>,
  isLoading: boolean | undefined,
]

const useRequestForm: TUseRequestForm = () => {
  const { openModal } = useModal()

  const callback = async () => {
    openModal(applicationSuccessMessage)
  }

  const onError = async () => {
    openModal(errorMessage)
  }

  const [submit, { isLoading }] = useFetch<IApplicationData, void>({
    query: async data => {
      await ServerDummyService.sendApplicationData(data!)
    },
    callback,
    onError,
  })

  return [submit, isLoading]
}

export default useRequestForm
