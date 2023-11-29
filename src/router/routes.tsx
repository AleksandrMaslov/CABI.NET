import { ReactNode } from 'react'
import { LoaderFunction, Navigate } from 'react-router-dom'

import { HomePage } from 'src/pages'

export const enum RoutesEnum {
  HOME = '/',
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
    name: RoutesEnum.DEFAULT,
    navbar: false,
    path: RoutesEnum.DEFAULT,
    element: <Navigate to={RoutesEnum.HOME} replace />,
  },
]
