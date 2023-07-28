import { useQuery } from '@tanstack/react-query'

import { Movie } from '@/types'
import APIClient, { APIClientReturn } from '@/services/apiClient'

const PAGE = 1

const END_POINT = `/movie/popular?page=${PAGE}`

const apiClient = new APIClient<Movie>(END_POINT)

export const useMovieQuery = () =>
  useQuery<APIClientReturn<Movie>, Error>({
    queryKey: ['movies'],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  })
