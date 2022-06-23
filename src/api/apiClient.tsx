/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { GenericObject } from 'type/Common'

// const URL = process.env.REACT_APP_API_URL
const JsonServerURL = process.env.REACT_APP_JSON_SERVER_API
// if (!JsonServerURL) {
//   throw new Error('REACT_APP_API_URL url not found in .env file')
// }

// axios use instance config
class APIClient {
  private instance
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  constructor(url: string = JsonServerURL!) {
    this.instance = axios.create({
      baseURL: url,
    })

    // intercepting to capture errors
    this.interceptors()

    // content type
    this.instance.defaults.headers.post['Content-Type'] = 'application/json'
  }
  get = (url: string, params?: GenericObject): Promise<any> => {
    return this.instance.get(url, params)
  }

  post = (url: string, data?: GenericObject): Promise<any> => {
    return this.instance.post(url, data)
  }

  put = (url: string, data?: GenericObject): Promise<any> => {
    return this.instance.put(url, data)
  }

  delete = (url: string): Promise<any> => {
    return this.instance.delete(url)
  }

  setAuthorization(token?: string | null) {
    if (token) {
      this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    } else {
      const localToken = localStorage.getItem('token')
      if (localToken) {
        this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + localToken
      } else {
        throw new Error('Authorization: Bearer token not found')
      }
    }
  }

  private interceptors() {
    this.instance.interceptors.response.use(
      function (response) {
        return response.data ? response.data : response
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let message
        switch (error.status) {
          case 500:
            message = 'Internal Server Error'
            break
          case 401:
            message = 'Invalid credentials'
            break
          case 404:
            message = 'Sorry! the data you are looking for could not be found'
            break
          default:
            message = error.message || error
        }
        return Promise.reject({ message, response: error.response.data })
      }
    )
  }
}

export default APIClient
