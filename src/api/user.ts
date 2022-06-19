import { APIClient, setAuthorization } from 'api'
import { User } from 'type/User'

const USER_PATH = 'user/'
const API = new APIClient()

class UserApi {
  constructor() {
    const token = localStorage.getItem('token')
    if (token) setAuthorization(token)
  }
  getUserById(id: number): Promise<User> {
    return API.get(USER_PATH + id)
  }
}

export default new UserApi()
