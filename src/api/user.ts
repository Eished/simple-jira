import axios from 'axios'
import { User } from 'type/User'

const URL = process.env.REACT_APP_API
if (!URL) throw new Error('API URL NOT FOUND')

const retrunData = (response: { data: any }) => {
  return response.data
}

export const getUserById = (uuid: string): Promise<User> => {
  return axios.get(URL + '/user/' + uuid).then(retrunData)
}
