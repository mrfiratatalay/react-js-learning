import { createBrowserRouter, RouterProvider } from "react-router-dom";

import First from "./First";
import Layout from "./Layout";
import Second from "./Second";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/first",
        element: <First />
      },

      {
        path: "/second",
        element: <Second />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
