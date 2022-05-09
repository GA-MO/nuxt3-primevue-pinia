import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

interface FetcherOptions extends AxiosRequestConfig {
  mock?: boolean
  jsonMockup?: string
  delay?: number
}

const defaultOptions: FetcherOptions = {
  mock: true,
  jsonMockup: '',
  delay: 0,
  timeout: 0,
}

const isDevelopment = process.env.NODE_ENV === 'development'

const shouldUseMockup = (options: FetcherOptions) => {
  if (!isDevelopment) return false
  if (!options.mock) return false
  if (options.jsonMockup === '') return false
  return true
}

function createFetcher(options: FetcherOptions): AxiosPromise {
  const fetchOptions: FetcherOptions = {
    ...defaultOptions,
    ...options,
  }

  return new Promise((resolve, reject) => {
    async function callFetch() {
      try {
        if (shouldUseMockup(fetchOptions)) {
          const response = await axios.get(fetchOptions.jsonMockup)
          resolve(response)
        } else {
          const response = await axios(fetchOptions)
          resolve(response)
        }
      } catch (error) {
        reject(error)
      }
    }

    setTimeout(() => callFetch(), fetchOptions.delay * 1000)
  })
}

export default createFetcher
