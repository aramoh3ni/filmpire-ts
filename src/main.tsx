import './main.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Layout from '@/layout'

import { router } from '@/routes'

const root = document.getElementById('root')!

createRoot(root).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
)
