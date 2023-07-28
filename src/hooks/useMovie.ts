import { useQuery } from '@tanstack/react-query'
import movieService, { MovieService } from '@/services/movieService'

export const useMovieQuery = () =>
  useQuery<MovieService, Error>({
    queryKey: ['movies'],
    queryFn: movieService.getAll,
    staleTime: 10 * 1000,
  })
