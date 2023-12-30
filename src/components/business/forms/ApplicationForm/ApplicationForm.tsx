import { Button, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler, useContext } from 'react'

import { ModalContext } from 'src/context'
import { useFetching, useInput } from 'src/hooks'
import { ServerDummyService } from 'src/services'

import { Confirmation, Warning } from '../..'

import classes from './ApplicationForm.module.css'

interface ApplicationFormProps {
  className?: string
}

const ApplicationForm: FC<ApplicationFormProps> = ({ className }) => {
  const { openModal, closeModal } = useContext(ModalContext)

  const rootClasses = [classes.applicationForm]
  if (className) rootClasses.push(className)

  const [usernameProps, usernameSettings] = useInput({ isEmpty: true })
  const [telProps, telSettings] = useInput({ isEmpty: true, isTel: true })
  const [emailProps, emailSettings] = useInput({ isEmail: true })
  const [commentsProps] = useInput()

  const [sendData, isLoading, error] = useFetching(async formData => {
    await ServerDummyService.sendApplicationData(formData)
  })

  const submitHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    await sendData({
      username: usernameProps.value,
      tel: telProps.value,
      email: emailProps.value,
      comments: commentsProps.value,
    })
    await closeModal()

    if (error) return openModal(<Warning />)
    openModal(<Confirmation />)
  }

  return (
    <form className={rootClasses.join(' ')} onSubmit={submitHandler}>
      <h3 className={classes.title}>Оставить заявку</h3>

      <Input
        placeholder="Ваше имя*"
        name="username"
        id="username"
        disabled={isLoading}
        {...usernameProps}
      />

      <Input
        placeholder="Номер телефона*"
        name="tel"
        id="tel"
        disabled={isLoading}
        {...telProps}
      />

      <Input
        placeholder="E-mail"
        name="email"
        id="email"
        disabled={isLoading}
        {...emailProps}
      />

      <Input
        placeholder="Комментарии"
        name="comments"
        id="comments"
        disabled={isLoading}
        {...commentsProps}
      />

      <Button
        className={classes.btn}
        label="ОТПРАВИТЬ ЗАЯВКУ"
        isLoading={isLoading}
        disabled={
          !usernameSettings.isValid ||
          !telSettings.isValid ||
          !emailSettings.isValid
        }
      />

      <p className={classes.note}>
        Нажимая на кнопку, вы&nbsp;соглашаетесь на обработку персональных
        даннных. *поля, обязательные для заполнения
      </p>
    </form>
  )
}

export default ApplicationForm
