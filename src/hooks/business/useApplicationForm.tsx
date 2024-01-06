import { Message } from 'src/components/business'
import { useModal } from 'src/context/modal'
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

type TUseApplicationForm = () => [
  (data: IApplicationData) => Promise<void>,
  isLoading: boolean | undefined,
]

const useApplicationForm: TUseApplicationForm = () => {
  const { openModal, closeModal } = useModal()

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
