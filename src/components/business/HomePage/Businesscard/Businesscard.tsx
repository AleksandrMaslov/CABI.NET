import { Anchor } from 'cabinet_ui_kit'
import { FC } from 'react'

import Contact from '../Contact/Contact'

import classes from './Businesscard.module.css'

interface BusinesscardProps {
  className?: string
}

const Businesscard: FC<BusinesscardProps> = ({ className }) => {
  const rootClasses = [classes.businesscard]
  if (className) rootClasses.push(className)

  return (
    <div className={rootClasses.join(' ')}>
      <div className={classes.content}>
        <h2>Контакты</h2>

        <Contact href="#" title="Адрес:" content="Воронцовские пруды, д.3" />

        <Contact href="#" title="Телефон:" content="+7 (495) 555-55-55" />

        <Contact href="#" title="E-mail:" content="coworking@mail.ru" />

        <div className={classes.social}>
          <Anchor href="#" lineColor="white" underlined>
            Telegram
          </Anchor>

          <Anchor href="#" lineColor="white" underlined>
            WhatsApp
          </Anchor>
        </div>
      </div>

      <div className={classes.milk} />
      <div className={classes.orange} />
    </div>
  )
}

export default Businesscard
