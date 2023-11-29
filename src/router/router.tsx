import { createBrowserRouter, createHashRouter } from 'react-router-dom'

import { ErrorRouteElement } from 'src/components/errors'

import { routes } from './routes'

const isHashRouter = import.meta.env.MODE === 'hash'
const createRouter = isHashRouter ? createHashRouter : createBrowserRouter

const router = createRouter(
  routes.map(({ path, element, loader }) => {
    return {
      path,
      element,
      loader,
      errorElement: <ErrorRouteElement />,
    }
  }),
  {
    basename: isHashRouter ? undefined : '/CABI.NET',
  },
)

export default router
