import {
  applicationSuccessMessage,
  errorMessage,
} from 'src/components/business/messages'
import { useModal } from 'src/context/modal'
import { IApplicationData } from 'src/models'
import { ServerDummyService } from 'src/services'

import { useFetch } from '..'

type TUseRequestForm = (
  resetFormCallback: () => void,
) => [(data: IApplicationData) => Promise<void>, isLoading: boolean | undefined]

const useRequestForm: TUseRequestForm = resetFormCallback => {
  const { openModal } = useModal()

  const callback = async () => {
    resetFormCallback()
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
