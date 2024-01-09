import {
  applicationSuccessMessage,
  errorMessage,
} from 'src/components/business/messages'
import { useModal } from 'src/context/modal'
import { IApplicationData } from 'src/models'
import { ApplicationsServiceDummy } from 'src/services'

import { useFetch } from '..'

type TUseApplicationForm = () => [
  (data: IApplicationData) => Promise<void>,
  isLoading: boolean | undefined,
]

const useApplicationForm: TUseApplicationForm = () => {
  const { openModal, closeModal } = useModal()

  const callback = async () => {
    await closeModal()
    openModal(applicationSuccessMessage)
  }

  const onError = async () => {
    await closeModal()
    openModal(errorMessage)
  }

  const [submit, { isLoading }] = useFetch<IApplicationData, void>({
    query: async data => {
      await ApplicationsServiceDummy.send(data!)
    },
    callback,
    onError,
  })

  return [submit, isLoading]
}

export default useApplicationForm
