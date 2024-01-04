import { useContext } from 'react'

import { Message } from 'src/components/business'
import { ModalContext } from 'src/context'
import { IApplicationData } from 'src/models'
import { ServerDummyService } from 'src/services'

import { useFetch } from '..'

const errorMsg = (
  <Message title="Произошла ошибка!" content="Обратитесь в службу поддержки." />
)

const successMsg = (
  <Message
    title="Спасибо, ваша заявка успешно отправлена!"
    content="Мы свяжемся с вами в ближайшее время."
  />
)

type TUseRequestForm = (
  resetFormCallback: () => void,
) => [(data: IApplicationData) => Promise<void>, isLoading: boolean | undefined]

const useRequestForm: TUseRequestForm = resetFormCallback => {
  const { openModal } = useContext(ModalContext)

  const callback = async () => {
    resetFormCallback()
    openModal(successMsg)
  }

  const onError = async () => {
    openModal(errorMsg)
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
