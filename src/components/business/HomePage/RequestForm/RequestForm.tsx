import { Button, Input } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './RequestForm.module.css'

interface RequestFormProps {
  className?: string
}

const RequestForm: FC<RequestFormProps> = ({ className }) => {
  const rootClasses = [classes.requestForm]
  if (className) rootClasses.push(className)

  return (
    <form className={rootClasses.join(' ')} onSubmit={e => e.preventDefault()}>
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
          id="name"
          required
        />

        <Input
          className={classes.input}
          placeholder="Телефон*"
          type="tel"
          name="tel"
          id="tel"
          required
        />

        <Input
          className={classes.input}
          placeholder="Пожелания"
          name="text"
          id="wishes"
        />

        <div className={classes.wrapper}>
          <Button
            className={classes.btn}
            label="ОТПРАВИТЬ ЗАЯВКУ"
            color="lightgrey"
          />

          <p className={classes.note}>
            Нажимая на кнопку, вы соглашаетесь на обработку персональных
            даннных. *поля, обязательные для заполнения
          </p>
        </div>
      </div>
    </form>
  )
}

export default RequestForm
