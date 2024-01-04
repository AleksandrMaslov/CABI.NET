import { ReactNode } from 'react'
import { LoaderFunction, Navigate } from 'react-router-dom'

import { BookingPage, HomePage, RecoverPage, RegisterPage } from 'src/pages'

export const enum RoutesEnum {
  HOME = '/',
  BOOKING = '/booking',
  RECOVER = '/recover',
  REGISTER = '/register',
  DEFAULT = '*',
}

interface IRoute {
  name: string
  navbar: boolean
  path: string
  element: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loader?: LoaderFunction<any>
}

export const routes: IRoute[] = [
  {
    name: 'Home',
    navbar: true,
    path: RoutesEnum.HOME,
    element: <HomePage />,
  },
  {
    name: 'Registration',
    navbar: true,
    path: RoutesEnum.REGISTER,
    element: <RegisterPage />,
  },
  {
    name: 'Cabinet',
    navbar: false,
    path: RoutesEnum.BOOKING,
    element: <BookingPage />,
  },
  {
    name: 'Recover',
    navbar: false,
    path: RoutesEnum.RECOVER,
    element: <RecoverPage />,
  },
  {
    name: RoutesEnum.DEFAULT,
    navbar: false,
    path: RoutesEnum.DEFAULT,
    element: <Navigate to={RoutesEnum.HOME} replace />,
  },
]
