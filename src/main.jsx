import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/home'
import IndonesiaNewsPage from './pages/newsIdn'
import AppleNewsPage from './pages/appleNews'
import ErrorPage from './pages/404'
import CryptoNewsPage from './pages/cryptoNews'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/news.id',
    element: <IndonesiaNewsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/apple',
    element: <AppleNewsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/crypto',
    element: <CryptoNewsPage />,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
