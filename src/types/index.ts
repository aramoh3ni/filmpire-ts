export type APIClientReturn<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type Movie = {
  id: number
  title: string
  release_date: string
  poster_path: string
  overview: string
  vote_average: number
}
