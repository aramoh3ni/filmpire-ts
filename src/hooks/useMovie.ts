import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { Movie } from '@/types'

const TMDB_API_KEY = import.meta.env.VITE_REACT_APP_TMDB_KEY
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL
const PAGE = 1

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<{ results: Movie[] }>(
    `${BASE_URL}/movie/popular?page=${PAGE}&api_key=${TMDB_API_KEY}`,
  )

  return response.data.results
}

export const useMovieQuery = () => useQuery(['movies'], fetchMovies)
