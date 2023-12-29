import { motion } from 'framer-motion'
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

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, bounce: 0 }}
      >
        <Hero />
        <About />
        <Services />
        <Plan />
        <Advantages />
        <Request />
        <Contacts />
      </motion.main>

      <Footer />
    </>
  )
}

export default HomePage
