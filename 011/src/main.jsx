import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routeOne from "./features/one/routes.jsx"
import routeTwo from "./features/two/routes.jsx"
import Layout from "./layouts/Layout.jsx"
import NotFound from "./pages/NotFound.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h1>Nesting Routes</h1>,
      },

      routeOne,

      routeTwo,

      {
        path: "*",
        element: <NotFound />
      }

    ]

  }
])













createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
