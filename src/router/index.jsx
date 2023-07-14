import { createBrowserRouter } from 'react-router-dom'

import Root from '../layout/Root'
import Home from '../pages/Home'
import CabList from '../pages/CabList'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cab-list',
        element: <CabList />
      }
    ]
  }
])

export default router