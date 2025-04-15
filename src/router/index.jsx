import Login from './pages/Login'
import Home from '@/pages/home'
import NotFound from '@/pages/NotFound'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
