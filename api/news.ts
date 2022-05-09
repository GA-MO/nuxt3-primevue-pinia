import { AxiosRequestConfig } from 'axios'
import createFetcher from '../utils/createFetcher'

const fetchAllNews = () =>
  createFetcher({
    url: 'https://jsonplaceholder.typicode.com/posts',
    jsonMockup: '/jsonMockup/news/news-all.json',
  })

const fetchNews = (id: number) =>
  createFetcher({
    url: 'https://jsonplaceholder.typicode.com/posts',
    jsonMockup: '/jsonMockup/news/news.json',
    params: {
      id,
    },
  })

const fetchNewsError = () =>
  createFetcher({
    url: 'https://jsonplaceholder.typicode.com/error',
  })

export { fetchAllNews, fetchNews, fetchNewsError }
