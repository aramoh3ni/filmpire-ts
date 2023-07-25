import './main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Layout from '@/layout'

import { router } from '@/routes'
import { Flowbite } from 'flowbite-react'

const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <Flowbite>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Flowbite>
  </StrictMode>,
)
