import { defineNuxtPlugin } from '#app'
import axios, { AxiosResponse } from 'axios'

function isServiceError(response: AxiosResponse) {
  // if (response.data?.error) return true
  return false
}

function getErrorMessage(response: AxiosResponse) {
  return 'Service Error'
}

export default defineNuxtPlugin(() => {
  axios.interceptors.response.use(function (response): AxiosResponse {
    if (isServiceError(response)) {
      throw Object({
        message: getErrorMessage(response),
      })
    }
    return response
  })
})
