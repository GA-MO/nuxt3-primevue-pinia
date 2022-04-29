export interface NewsItem {
  userId: number
  id: number
  title: string
  body: string
}

export interface NewsState {
  newsList: NewsItem[]
}
