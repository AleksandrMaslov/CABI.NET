import { Button, Input } from 'cabinet_ui_kit'
import { FC, FormEventHandler, useState } from 'react'

import { useInput } from 'src/hooks'

import classes from './RequestForm.module.css'

interface RequestFormProps {
  className?: string
}

const RequestForm: FC<RequestFormProps> = ({ className }) => {
  const rootClasses = [classes.requestForm]
  if (className) rootClasses.push(className)

  const [isLoading, setLoading] = useState<boolean>(false)
  const [usernameProps, usernameSettings] = useInput({ isEmpty: true })
  const [telProps, telSettings] = useInput({ isEmpty: true, isTel: true })
  const [textProps, textSettings] = useInput()

  const submitHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    setLoading(true)
    setTimeout(() => {
      usernameSettings.reset()
      telSettings.reset()
      textSettings.reset()
      setLoading(false)
    }, 1000)
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
          {...textProps}
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
