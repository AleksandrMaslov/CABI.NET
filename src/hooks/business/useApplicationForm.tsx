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
const useApplicationForm = (): [
  (data: IApplicationData) => Promise<void>,
  isLoading: boolean | undefined,
] => {
  const { openModal, closeModal } = useContext(ModalContext)

  const callback = async () => {
    await closeModal()
    openModal(successMsg)
  }

  const onError = async () => {
    await closeModal()
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

export default useApplicationForm
