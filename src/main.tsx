import './main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes'
import { Flowbite } from 'flowbite-react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const clientQuery = new QueryClient()

const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <Flowbite>
      <QueryClientProvider client={clientQuery}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Flowbite>
  </StrictMode>,
)
