import APIClient from 'api/apiClient'
import { User } from 'type/User'

const API = new APIClient()

type LoginRes =
  | {
      user: User
      accessToken: string
    }
  | string

type LoginParams = { email: string; password: string }

class AuthApi {
  register(params: LoginParams): Promise<void | string> {
    return API.post('users/', params)
      .then((data: LoginRes) => {
        this.setToken(data)
      })
      .catch(function (error) {
        return error.response
      })
  }

  login({ email, password }: LoginParams): Promise<void | string> {
    return API.post('login', { email, password })
      .then((data: LoginRes) => {
        this.setToken(data)
      })
      .catch(function (error) {
        return error.response
      })
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('localUser')
    window.location.href = window.location.origin
    return Promise.resolve()
  }

  isLogin() {
    return !!localStorage.getItem('token')
  }

  private setToken(data: LoginRes) {
    if (typeof data === 'object') {
      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('localUser', JSON.stringify(data.user))
    } else {
      return data
    }
  }
}

export default AuthApi
