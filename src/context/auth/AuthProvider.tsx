import { FC, ReactNode, useEffect, useState } from 'react'

import { useLocalStorage } from 'src/hooks'
import { ILoginFormData, IUser, TAuthListeners } from 'src/models'

import { AuthContext, useFetchAuth, useFetchLogin } from '.'

const noLocalErrorMsg = 'Локальных данных для авторизации не найдено.'

interface IAuthProviderProps {
  children: ReactNode
}

const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>()
  const [isRemember, setRemember] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [localUser, saveLocalUser, removeLocalUser] =
    useLocalStorage<IUser>('user')

  const resetError = () => setError('')

  const onAuthRequestError = async (msg: string | undefined) =>
    setError(msg || '')

  const authCallback = async (data: IUser | undefined) => {
    if (!data?.token) return removeLocalUser()
    setUser(data)
  }

  const [auth, isAuthing] = useFetchAuth({
    onError: onAuthRequestError,
    callback: authCallback,
  })

  const [login, isLogging] = useFetchLogin({
    onError: onAuthRequestError,
    callback: authCallback,
  })

  const signIn = async (data: ILoginFormData, listeners?: TAuthListeners) => {
    resetError()
    const { isRemember, ...loginData } = data
    setRemember(isRemember)
    return login(loginData, listeners)
  }

  const reauth = async (listeners?: TAuthListeners) => {
    resetError()
    if (!localUser) return setError(noLocalErrorMsg)
    return auth(localUser, listeners)
  }

  const signOut = () => {
    resetError()
    removeLocalUser()
    setUser(undefined)
  }

  useEffect(
    () => setLoading(isAuthing || isLogging || false),
    [isAuthing, isLogging],
  )

  useEffect(() => {
    if (!user?.token || !isRemember) return
    saveLocalUser(user)
  }, [user])

  useEffect(() => {
    if (!error) return
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  useEffect(() => {
    reauth()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        signIn,
        signOut,
        reauth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
