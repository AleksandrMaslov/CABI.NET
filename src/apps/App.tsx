import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router-dom'

import { ErrorBoundaryGeneral } from 'src/components/errors'
import router from 'src/router/router'
import './App.css'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryGeneral}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
