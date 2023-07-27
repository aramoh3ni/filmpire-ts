import './main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes'
import { Flowbite } from 'flowbite-react'

const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <Flowbite>
      <RouterProvider router={router} />
    </Flowbite>
  </StrictMode>,
)
