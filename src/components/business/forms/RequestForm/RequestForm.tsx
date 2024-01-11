import { Button, Input } from '@aleksandrmaslov/cabinet_ui_kit'
import { FC, FormEventHandler } from 'react'

import { useInput } from 'src/hooks'
import { useRequestForm } from 'src/hooks/business'

import classes from './RequestForm.module.css'

interface RequestFormProps {
  className?: string
}

const RequestForm: FC<RequestFormProps> = ({ className }) => {
  const rootClasses = [classes.requestForm]
  if (className) rootClasses.push(className)

  const [usernameProps, usernameSettings] = useInput({ isEmpty: true })
  const [telProps, telSettings] = useInput({ isEmpty: true, isTel: true })
  const [commentsProps, commentsSettings] = useInput()
  const isFormNotValid = !usernameSettings.isValid || !telSettings.isValid

  const [submit, isLoading] = useRequestForm()
  const submitHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    submit(
      {
        username: usernameProps.value,
        tel: telProps.value,
        comments: commentsProps.value,
      },
      {
        onSuccess: async () => {
          usernameSettings.reset()
          telSettings.reset()
          commentsSettings.reset()
        },
      },
    )
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
            disabled={isFormNotValid}
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
