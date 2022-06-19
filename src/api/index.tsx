/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const URL = process.env.REACT_APP_API
if (!URL) throw new Error('REACT_APP_API url not found in .env file')

// default
axios.defaults.baseURL = URL + '/'

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json'

// intercepting to capture errors
axios.interceptors.response.use(
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
    return Promise.reject(message)
  }
)

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: string) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

class APIClient {
  /**
   * Fetches data from given url
   */
  get = (url: string, params?: any): Promise<any> => {
    return axios.get(url, params)
  }

  /**
   * post given data to url
   */
  create = (url: string, data: any): Promise<any> => {
    return axios.post(url, data)
  }

  /**
   * Updates data
   */
  update = (url: string, data: any): Promise<any> => {
    return axios.put(url, data)
  }

  /**
   * Delete
   */
  delete = (url: string): Promise<any> => {
    return axios.delete(url)
  }
}

export { APIClient, setAuthorization }