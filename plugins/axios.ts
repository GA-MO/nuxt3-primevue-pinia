import { defineNuxtPlugin } from '#app'
import axios, { AxiosError, AxiosResponse } from 'axios'

import AlertProgrammatic from '../components/AlertProgrammatic'

function isServiceError(response: AxiosResponse): boolean {
  // if (response.data?.error) return true
  return false
}

function getErrorMessage(response: AxiosResponse): string {
  return 'Service Error'
}

function success(response: AxiosResponse): AxiosResponse {
  if (isServiceError(response)) {
    const errorMessage: string = getErrorMessage(response)

    AlertProgrammatic({
      type: 'error',
      title: response?.data?.error || 'Error',
      content: errorMessage,
    })

    throw Object({
      message: errorMessage,
    })
  }

  return response
}

function error(error: AxiosError) {
  AlertProgrammatic({
    type: 'error',
    title: error?.response?.statusText || 'Error',
    content: error.message,
  })

  return Promise.reject(error)
}

export default defineNuxtPlugin(() => {
  axios.interceptors.response.use(success, error)
})
