import APIClient from 'api/apiClient'

const API = new APIClient()

type LoginRes =
  | {
      user: { id: number; name: string; token: string }
    }
  | string

type LoginParams = { username: string; password: string }

class AuthApi {
  register(params: LoginParams): Promise<void | string> {
    return API.post('/register', params).then((data: LoginRes) => {
      this.setToken(data)
    })
  }

  login(params: LoginParams): Promise<void | string> {
    return API.post('/login', params).then((data: LoginRes) => {
      this.setToken(data)
    })
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = window.location.origin
    return Promise.resolve()
  }

  isLogin() {
    return !!localStorage.getItem('token')
  }

  private setToken(data: LoginRes) {
    if (typeof data === 'object') {
      if (data.user.token) {
        localStorage.setItem('token', data.user.token)
        localStorage.setItem('user', JSON.stringify({ ...data.user, username: data.user.name }))
      }
    } else {
      return data
    }
  }
}

export default AuthApi
