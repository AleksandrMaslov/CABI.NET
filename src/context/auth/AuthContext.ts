import { createContext } from 'react'

import { ILoginFormData, IUser, TAuthListeners } from 'src/models'

interface IAuthContext {
  user: IUser | undefined
  isLoading: boolean
  error: string
  signIn: (data: ILoginFormData, listeners?: TAuthListeners) => Promise<void>
  reauth: (listeners?: TAuthListeners) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  isLoading: false,
  error: '',
  signIn: async () => {},
  reauth: async () => {},
  signOut: () => {},
})

export default AuthContext
