import { Button, Input } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './ApplicationForm.module.css'

interface ApplicationFormProps {
  className?: string
}

const ApplicationForm: FC<ApplicationFormProps> = ({ className }) => {
  const rootClasses = [classes.applicationForm]
  if (className) rootClasses.push(className)

  return (
    <form className={rootClasses.join(' ')} onSubmit={e => e.preventDefault()}>
      <h3 className={classes.title}>Оставить заявку</h3>

      <Input
        placeholder="Ваше имя*"
        name="username"
        id="username"
        // disabled={isLoading}
        // {...usernameProps}
      />

      <Input
        placeholder="Номер телефона*"
        name="tel"
        id="tel"
        // disabled={isLoading}
        // {...telProps}
      />

      <Input
        placeholder="E-mail"
        name="email"
        id="email"
        // disabled={isLoading}
        // {...textProps}
      />

      <Input
        placeholder="Комментарии"
        name="comments"
        id="comments"
        // disabled={isLoading}
        // {...textProps}
      />

      <Button
        className={classes.btn}
        label="ОТПРАВИТЬ ЗАЯВКУ"
        // isLoading={isLoading}
        // disabled={!usernameSettings.isValid || !telSettings.isValid}
      />

      <p className={classes.note}>
        Нажимая на кнопку, вы&nbsp;соглашаетесь на обработку персональных
        даннных. *поля, обязательные для заполнения
      </p>
    </form>
  )
}

export default ApplicationForm
