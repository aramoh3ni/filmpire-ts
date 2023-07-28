import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_REACT_APP_TMDB_KEY,
  },
})

export interface APIClientReturn<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = async () => {
    const res = await axiosInstance.get<APIClientReturn<T>>(this.endpoint)
    return res.data
  }
}

export default APIClient
