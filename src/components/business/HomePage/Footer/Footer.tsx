import { Anchor, Logo } from 'cabinet_ui_kit'
import { FC } from 'react'

import classes from './Footer.module.css'

interface FooterProps {
  className?: string
}

const Footer: FC<FooterProps> = ({ className }) => {
  const rootClasses = [classes.footer]
  if (className) rootClasses.push(className)

  return (
    <footer className={rootClasses.join(' ')}>
      <div className={classes.container}>
        <Logo color="white" />

        <h6 className={classes.header}>
          © 2021 Сoworking. Дизайн сайта - &nbsp;
          <Anchor
            className={classes.anchor}
            href="https://www.behance.net/maslovairina"
            underlined
            lineColor="white"
          >
            Ирина Маслова
          </Anchor>
          . Все права защищены.
        </h6>

        <Anchor href="#" underlined lineColor="white">
          <h6>Политика конфиденциальности</h6>
        </Anchor>
      </div>
    </footer>
  )
}

export default Footer
