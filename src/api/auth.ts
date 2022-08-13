import APIClient from 'api/apiClient'

const API = new APIClient()
export interface User {
  username: string
  avatar?: string
}

type LoginRes = {
  user: {
    id: number
    name: string
    token: string
  }
}

type LoginParams = { username: string; password: string }

class AuthApi {
  register(params: LoginParams): Promise<User> {
    return API.post('/register', params).then((data: LoginRes) => this.setToken(data))
  }

  login(params: LoginParams): Promise<User> {
    return API.post('/login', params).then((data: LoginRes) => this.setToken(data))
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return Promise.resolve()
  }

  isLogin() {
    return !!localStorage.getItem('token')
  }

  getMe(): User | null {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      return JSON.parse(localUser)
    } else {
      return null
    }
  }

  private setToken(data: LoginRes) {
    const user = { ...data.user, username: data.user.name }
    localStorage.setItem('token', data.user.token)
    localStorage.setItem('user', JSON.stringify(user))
    return user
  }
}

export default AuthApi
