import { createContext, FC, ReactNode, useContext, useState } from 'react'
import AuthApi, { User } from '../api/auth'

interface IAuthForm {
  email: string
  password: string
}

export interface IAuthContext {
  user: User | null
  register: (form: IAuthForm) => Promise<void>
  login: (form: IAuthForm) => Promise<void>
  logout: () => Promise<void>
}
const AuthContext = createContext<IAuthContext | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const authApi = new AuthApi()
  const [user, setUser] = useState<User | null>(authApi.getMe())

  const logout = async () => {
    await authApi.logout().then(() => setUser(null))
  }
  const login = async ({ email, password }: IAuthForm) => {
    if (email && password) {
      await authApi
        .login({ username: email, password })
        .then((user) => setUser(user))
        .catch((e) => alert(e))
    }
  }
  const register = async ({ email, password }: IAuthForm) => {
    if (email && password) {
      await authApi
        .register({ username: email, password })
        .then((user) => setUser(user))
        .catch((e) => alert(e))
    }
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}> {children} </AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used in AuthProvider')
  } else {
    return context
  }
}
