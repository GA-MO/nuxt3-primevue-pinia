export type NewsItem = {
  userId: number
  id: number
  title: string
  body: string
}

export type NewsState = {
  newsList: NewsItem[]
}
