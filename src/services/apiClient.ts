import axios from 'axios'

import { APIClientReturn } from '@/types'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_REACT_APP_TMDB_KEY,
  },
})

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = async (): Promise<APIClientReturn<T>> => {
    const res = await axiosInstance.get<APIClientReturn<T>>(this.endpoint)
    return res.data
  }
}

export default APIClient
