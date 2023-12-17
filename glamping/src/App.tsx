import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import NotFound from "./screens/NotFound";
import Room from "./screens/Room";
import RoomDetail from "./screens/RoomDetail";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/room",
                element: <Room />,
            },
            {
                path: "/room/:roomName",
                element: <RoomDetail />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={route} />;
}
