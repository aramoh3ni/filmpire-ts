import styles from './movie.module.css'

import { useSidebarStore } from '@/store/useSidebarStore'
import { Movie } from '@/types'

import { Link } from 'react-router-dom'

import { Rating } from 'flowbite-react'
import { twMerge } from 'tailwind-merge'

interface MovieProps {
  movie: Movie
}

export const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  console.log(movie)
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen)
  const open = 'sm:w-60 md:w-52'
  const close = 'sm:w-60 md:w-56 lg:w-62'

  return (
    <Link
      to="#"
      className={twMerge(
        styles.container,
        `group/item hover:bg-slate-100`,
        isSidebarOpen ? open : close,
      )}
    >
      <div
        className={twMerge(
          styles.cardDetail,
          'sm:block group/edit invisible md:group-hover/item:visible md:group-hover/item:scale-105 ',
        )}
      >
        <h5 className={styles.cardTitle}>{movie?.title}</h5>
        <Rating>
          <Rating.Star />
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
            {movie?.vote_average}
          </p>
          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
        </Rating>
      </div>

      <div
        className={twMerge(
          styles.cardImageContainer,
          'md:group-hover/item:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] md:group-hover/item:scale-105',
        )}
      >
        <img
          alt={movie?.title}
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w400/${movie?.poster_path}`
              : `https://fillmurray.com/200/300`
          }
          className={styles.cardImage}
        />
      </div>

      <div className="md:hidden">
        <h5 className={styles.cardTitle}>{movie?.title}</h5>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
      </div>
    </Link>
  )
}
