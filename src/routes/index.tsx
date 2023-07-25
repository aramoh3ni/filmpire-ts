import { Actors, MovieDetails, Movies, Profile } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Movies />,
  },
  {
    path: 'movies/:id',
    element: <MovieDetails />,
  },
  {
    path: 'actors',
    element: <Actors />,
  },
  {
    path: 'profile/:id',
    element: <Profile />,
  },
])
