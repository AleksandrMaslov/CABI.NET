import { createBrowserRouter, createHashRouter } from 'react-router-dom'

import { ErrorRouteElement } from 'src/components/errors'

import { routes } from './routes'

const isHashRouter = import.meta.env.MODE === 'hash'
const createRouter = isHashRouter ? createHashRouter : createBrowserRouter
const basename = isHashRouter ? undefined : import.meta.env.VITE_BASE_URL
const errorElement = <ErrorRouteElement />

const router = createRouter(
  routes.map(route => ({ ...route, errorElement })),
  { basename },
)

export default router
