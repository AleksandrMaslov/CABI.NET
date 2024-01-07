import { Message } from 'src/components/ui'

export const errorMessage = (
  <Message title="Произошла ошибка!" content="Обратитесь в службу поддержки." />
)

export const applicationSuccessMessage = (
  <Message
    title="Спасибо, ваша заявка успешно отправлена!"
    content="Мы свяжемся с вами в ближайшее время."
  />
)

export const loginFailedMessage = (
  <Message
    title="Ошибка авторизации."
    content="Убедитесь, что указанные данные верны."
  />
)
