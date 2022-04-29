import { useNewsStore } from './store'
import createFetcher from '../../utils/createFetcher'
import { AxiosResponse } from 'axios'
import { NewsItem } from './models'

const isMock: boolean = false
const delay: number = 2

async function fetchNews() {
  const newsStore = useNewsStore()
  const newsFetcher = createFetcher({
    url: 'https://jsonplaceholder.typicode.com/posts',
    jsonMockup: '/jsonMockup/news.json',
    mock: isMock,
    delay,
  })

  const response: AxiosResponse = await newsFetcher

  const newsList = response.data.map(
    (item: any): NewsItem => ({
      userId: item.useId,
      id: item.id,
      title: item.title,
      body: item.body,
    }),
  )

  newsStore.newsList = newsList
}

async function fetchNewsError() {
  try {
    const newErrorFetcher = createFetcher({
      url: 'https://jsonplaceholder.typicode.com/test',
      delay,
    })

    await newErrorFetcher
  } catch (err) {
    console.log('ErrorMessage', err)
  }
}

export { fetchNews, fetchNewsError }
