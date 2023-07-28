import { useMovieQuery } from '@/hooks/useMovie'

export const Movies = () => {
  const { isLoading, isError, error, data } = useMovieQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{JSON.stringify(error)}</div>

  return (
    <div>{data?.map((movie) => <h4 key={movie.id}>{movie.title}</h4>)}</div>
  )
}
