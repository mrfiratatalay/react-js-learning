import { Navigate, Outlet } from "react-router-dom";
import First from "./First";
import Second from "./Second";

const routeOne = {
    path: "/one",
    element: <Outlet />,
    children: [
        {
            index: true,
            element: <Navigate to="1" replace />
        },

        {
            path: "1",
            element: <First />
        },

        {
            path: "2",
            element: <Second />
        }
    ]
}

export default routeOne;
