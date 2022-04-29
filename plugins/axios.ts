import { defineNuxtPlugin } from '#app'
import axios, { AxiosResponse } from 'axios'

function isServiceError(response: AxiosResponse): boolean {
  // if (response.data?.error) return true
  return false
}

function getErrorMessage(response: AxiosResponse): string {
  return 'Service Error'
}

export default defineNuxtPlugin(() => {
  function success(response: AxiosResponse): AxiosResponse {
    if (isServiceError(response)) {
      throw Object({
        message: getErrorMessage(response),
      })
    }
    return response
  }

  axios.interceptors.response.use(success)
})
