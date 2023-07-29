import { MovieList } from '@/components'
import { useMovieQuery } from '@/hooks/useMovie'

export const Movies = () => {
  const { isLoading, isError, data } = useMovieQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>No Movie</div>
  return (
    <div>
      <MovieList movies={data?.results} />
    </div>
  )
}
