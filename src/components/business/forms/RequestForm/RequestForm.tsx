import { Button, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler, useContext } from 'react'

import { ModalContext } from 'src/context'
import { useFetch, useInput } from 'src/hooks'
import { IApplication } from 'src/models'
import { ServerDummyService } from 'src/services'
import { isInterfaceInstance } from 'src/utils'

import { Message } from '../..'

import classes from './RequestForm.module.css'

const errorMessage = (
  <Message title="Произошла ошибка!" content="Обратитесь в службу поддержки." />
)

const confirmMessage = (
  <Message
    title="Спасибо, ваша заявка успешно отправлена!"
    content="Мы свяжемся с вами в ближайшее время."
  />
)

interface RequestFormProps {
  className?: string
}

const RequestForm: FC<RequestFormProps> = ({ className }) => {
  const { openModal } = useContext(ModalContext)

  const rootClasses = [classes.requestForm]
  if (className) rootClasses.push(className)

  const [usernameProps, usernameSettings] = useInput({ isEmpty: true })
  const [telProps, telSettings] = useInput({ isEmpty: true, isTel: true })
  const [commentsProps, commentsSettings] = useInput()

  const [sendData, { isLoading, error }] = useFetch<void>(async data => {
    if (!isInterfaceInstance<IApplication>(data))
      throw new Error('Application data error.')
    return ServerDummyService.sendApplicationData(data)
  })

  const resetForm = () => {
    usernameSettings.reset()
    telSettings.reset()
    commentsSettings.reset()
  }

  const submitHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    if (isLoading) return

    const data = {
      username: usernameProps.value,
      tel: telProps.value,
      comments: commentsProps.value,
    }

    await sendData(data)
    //TODO: не обрабатывает ошибку из-за асинхронности стейта
    if (error) return openModal(errorMessage)
    resetForm()
    openModal(confirmMessage)
  }

  return (
    <form className={rootClasses.join(' ')} onSubmit={submitHandler}>
      <div className={classes.container}>
        <h2 className={classes.title}>Не можете определиться?</h2>

        <p className={classes.recommendation}>
          Оставьте заявку с контактными данными и вашими пожеланиями, а мы
          постараемся подобрать для вас подходящий вариант
        </p>

        <Input
          className={classes.input}
          placeholder="Ваше имя*"
          name="username"
          id="username"
          disabled={isLoading}
          {...usernameProps}
        />

        <Input
          className={classes.input}
          placeholder="Телефон*"
          name="tel"
          id="tel"
          disabled={isLoading}
          {...telProps}
        />

        <Input
          className={classes.input}
          placeholder="Пожелания"
          name="comments"
          id="comments"
          disabled={isLoading}
          {...commentsProps}
        />

        <div className={classes.wrapper}>
          <Button
            className={classes.btn}
            label="ОТПРАВИТЬ ЗАЯВКУ"
            color="lightgrey"
            isLoading={isLoading}
            disabled={!usernameSettings.isValid || !telSettings.isValid}
          />

          <p className={classes.note}>
            Нажимая на кнопку, вы&nbsp;соглашаетесь на обработку персональных
            даннных. *поля, обязательные для заполнения
          </p>
        </div>
      </div>
    </form>
  )
}

export default RequestForm
