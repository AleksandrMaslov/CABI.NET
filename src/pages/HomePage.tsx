import { FC } from 'react'

import {
  About,
  Advantages,
  Contacts,
  Footer,
  Header,
  Hero,
  Plan,
  Request,
  Services,
} from 'src/components/business'

const HomePage: FC = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Plan />
        <Advantages />
        <Request />
        <Contacts />
      </main>

      <Footer />
    </>
  )
}

export default HomePage
