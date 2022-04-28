import { useNewsStore } from './store'
import createFetcher from '../../utils/createFetcher'
import { AxiosResponse } from 'axios'
import { NewsItem } from './models'

const mock = false
const delay = 2

async function fetchNews() {
  const newsStore = useNewsStore()
  const newsFetcher = createFetcher({
    url: 'https://jsonplaceholder.typicode.com/posts',
    jsonMockup: '/jsonMockup/news.json',
    mock,
    delay,
  })

  const response: AxiosResponse = await newsFetcher

  const newsList = response.data.map(
    (item): NewsItem => ({
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
    console.log('dgamgoagag', err)
  }
}

export { fetchNews, fetchNewsError }
