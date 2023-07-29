import { useSidebarStore } from '@/store/useSidebarStore'
import { Movie } from '@/types'
import { MovieCard } from '../MovieCard'

interface MovieListProps {
  movies: Movie[]
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const open = 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'
  const close = 'md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4'

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 ${
        isSidebarOpen ? open : close
      }`}
    >
      {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}
