import { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { RoutesEnum } from 'src/router/routes'

import { useAuth } from '.'

interface AuthRequiredProps {
  children: ReactNode
}

const AuthRequired: FC<AuthRequiredProps> = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()

  if (!auth?.user)
    return <Navigate to={RoutesEnum.HOME} state={{ from: location }} />

  return children
}

export default AuthRequired
