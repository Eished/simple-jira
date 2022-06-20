import { APIClient, setAuthorization } from 'api'
import { User } from 'type/User'

const USER_PATH = 'users/'
const API = new APIClient()

class UserApi {
  constructor() {
    const token = localStorage.getItem('token')
    if (token) setAuthorization(token)
  }
  getUserById(id: number): Promise<User> {
    return API.get(USER_PATH + id)
  }
  getMe(): User | undefined {
    const localUser = localStorage.getItem('localUser')
    if (localUser) return JSON.parse(localUser)
  }
  getAllUsers(): Promise<User[]> {
    return API.get(USER_PATH)
  }
}

export default new UserApi()
