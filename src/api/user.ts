import APIClient from 'api/apiClient'
import { User } from 'type/User'

const API = new APIClient()

class UserApi {
  subUrl
  constructor(subUrl = 'users/') {
    API.setAuthorization()
    this.subUrl = subUrl
  }
  getUserById(id: number): Promise<User> {
    return API.get(this.subUrl + id)
  }
  getMe(): User | undefined {
    const localUser = localStorage.getItem('user')
    if (localUser) return JSON.parse(localUser)
  }
  getAllUsers(): Promise<User[]> {
    return API.get(this.subUrl)
  }
}

export default UserApi
