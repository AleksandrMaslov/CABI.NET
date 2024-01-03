import { Button, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler } from 'react'

import { useFetchModal, useInput } from 'src/hooks'
import { IApplicationData } from 'src/models'
import { ServerDummyService } from 'src/services'

import { Message } from '../..'

import classes from './ApplicationForm.module.css'

const errorMsg = (
  <Message title="Произошла ошибка!" content="Обратитесь в службу поддержки." />
)

const successMsg = (
  <Message
    title="Спасибо, ваша заявка успешно отправлена!"
    content="Мы свяжемся с вами в ближайшее время."
  />
)

interface ApplicationFormProps {
  className?: string
}

const ApplicationForm: FC<ApplicationFormProps> = ({ className }) => {
  const rootClasses = [classes.applicationForm]
  if (className) rootClasses.push(className)

  const [usernameProps, usernameSettings] = useInput({ isEmpty: true })
  const [telProps, telSettings] = useInput({ isEmpty: true, isTel: true })
  const [emailProps, emailSettings] = useInput({ isEmail: true })
  const [commentsProps] = useInput()

  const query = async (data: IApplicationData | undefined) => {
    await ServerDummyService.sendApplicationData(data!)
  }

  const [submit, { isLoading }] = useFetchModal<IApplicationData, void>({
    query,
    successMsg,
    errorMsg,
  })

  const submitHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    submit({
      username: usernameProps.value,
      tel: telProps.value,
      email: emailProps.value,
      comments: commentsProps.value,
    })
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
