import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router-dom'

import { ErrorBoundaryGeneral } from 'src/components/errors'
import { AuthProvider } from 'src/context/auth'
import { ModalProvider } from 'src/context/modal'
import router from 'src/router/router'
import './App.css'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryGeneral}>
      <AuthProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
