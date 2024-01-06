import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router-dom'

import { ErrorBoundaryGeneral } from 'src/components/errors'
import { ModalProvider } from 'src/context/modal'
import router from 'src/router/router'
import './App.css'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryGeneral}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ErrorBoundary>
  )
}

export default App
