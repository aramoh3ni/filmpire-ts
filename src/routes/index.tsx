import Layout from '@/layout'

import { Actors, MovieDetails, Movies, Profile, NotFound } from '@/pages'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Movies />} />
      <Route path="profile" element={<Profile />} />
      <Route path="actors" element={<Actors />} />
      <Route path="movies">
        <Route index element={<Movies />} />
        <Route
          path=":id"
          element={<MovieDetails />}
          errorElement={<h1>Error Accrued in HomePage.</h1>}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)
