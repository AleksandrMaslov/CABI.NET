import { Button, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler } from 'react'

import { useInput } from 'src/hooks'
import { useApplicationForm } from 'src/hooks/business'

import classes from './ApplicationForm.module.css'

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
  const isFormNotValid =
    !usernameSettings.isValid || !telSettings.isValid || !emailSettings.isValid

  const [submit, isLoading] = useApplicationForm()
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
        disabled={isFormNotValid}
      />

      <p className={classes.note}>
        Нажимая на кнопку, вы&nbsp;соглашаетесь на обработку персональных
        даннных. *поля, обязательные для заполнения
      </p>
    </form>
  )
}

export default ApplicationForm
