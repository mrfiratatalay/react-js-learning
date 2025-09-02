import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//For Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MyComponent from './MyComponent';


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
