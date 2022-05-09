import createFetcher from '../../utils/createFetcher'
import { AxiosResponse } from 'axios'
import { NewsItem } from './models'
import { useNewsStore } from './store'
import { fetchAllNews, fetchNewsError } from '../../api/news'

async function getNews() {
  const newsStore = useNewsStore()
  const response: AxiosResponse = await fetchAllNews()

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

async function getNewsError() {
  await fetchNewsError()
}

export default { getNews, getNewsError }
