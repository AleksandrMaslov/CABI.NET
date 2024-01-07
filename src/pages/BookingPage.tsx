import { FC } from 'react'

import { Header } from 'src/components/business/pages/BookingPage'
import { TempBlock } from 'src/components/business/temp'

const BookingPage: FC = () => {
  return (
    <>
      <Header />
      <TempBlock title="Booking Page" />
    </>
  )
}

export default BookingPage
