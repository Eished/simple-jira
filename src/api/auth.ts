import { APIClient } from 'api'
import { User } from 'type/User'

const USER_PATH = 'users/'
const API = new APIClient()

type LoginRes =
  | {
      user: User
      accessToken: string
    }
  | string

type LoginParams = { email: string; password: string }

class AuthApi {
  register(data: { email: string; password: string }): Promise<void | string> {
    return API.post(USER_PATH, data)
      .then((data: LoginRes) => {
        if (typeof data === 'object') {
          localStorage.setItem('token', data.accessToken)
          localStorage.setItem('localUser', JSON.stringify(data.user))
        } else {
          return data
        }
      })
      .catch(function (error) {
        return error.response
      })
  }
  login({ email, password }: LoginParams): Promise<void | string> {
    return API.post('login', { email, password })
      .then((data: LoginRes) => {
        if (typeof data === 'object') {
          localStorage.setItem('token', data.accessToken)
          localStorage.setItem('localUser', JSON.stringify(data.user))
        } else {
          return data
        }
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
}

export default new AuthApi()
