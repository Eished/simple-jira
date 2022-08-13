import APIClient from 'api/apiClient'
import { User } from 'type/User'

const API = new APIClient()

class UserApi {
  url
  constructor(url = '/users') {
    API.setAuthorization()
    this.url = url
  }
  getUserById(id: number): Promise<User> {
    return API.get(this.url + id)
  }
  getAllUsers(): Promise<User[]> {
    return API.get(this.url)
  }
}

export default UserApi
