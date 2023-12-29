import { FC } from 'react'

import classes from './Confirmation.module.css'

interface ConfirmationProps {
  className?: string
}

const Confirmation: FC<ConfirmationProps> = ({ className }) => {
  const rootClasses = [classes.confirmation]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <h2 className={classes.header}>
        Спасибо, ваша заявка успешно отправлена!
      </h2>

      <p className={classes.text}>Мы свяжемся с вами в ближайшее время.</p>
    </div>
  )
}

export default Confirmation
