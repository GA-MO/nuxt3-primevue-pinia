import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

interface FetcherOptions {
  mock?: boolean
  jsonMockup?: string
  delay?: number
}

const defaultOptions: AxiosRequestConfig & FetcherOptions = {
  mock: false,
  jsonMockup: '',
  delay: 0,
  timeout: 0,
}

function createFetcher(options = defaultOptions): AxiosPromise {
  return new Promise((resolve, reject) => {
    async function callFetch() {
      try {
        if (options.mock) {
          const response = await axios.get(options.jsonMockup)
          resolve(response)
        }

        const response = await axios(options)
        resolve(response)
      } catch (error) {
        reject(error)
      }
    }

    setTimeout(() => callFetch(), options.delay * 1000)
  })
}

export default createFetcher
