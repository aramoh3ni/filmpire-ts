import { Movie, APIClientReturn } from '@/types'

import APIClient from './apiClient'

export type MovieService = APIClientReturn<Movie>

const PAGE = 1

const END_POINT = `/movie/popular?page=${PAGE}`

export default new APIClient<Movie>(END_POINT)
