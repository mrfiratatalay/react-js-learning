import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//For Router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MyComponent from './components/MyButton.tsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MyComponent />
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
