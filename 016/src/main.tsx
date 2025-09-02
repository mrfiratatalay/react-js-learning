import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Echo from "./Echo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    //For Query Param
    path: "/echo",
    element: <Echo />
  },

  {
    //For URL Param
    path: "/echo/:msg",
    element: <Echo />
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
