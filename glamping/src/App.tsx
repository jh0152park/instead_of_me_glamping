import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import NotFound from "./screens/NotFound";
import Room from "./screens/Room";
import RoomDetail from "./screens/RoomDetail";
import Special from "./screens/Special";
import SightSeeing from "./screens/SightSeeing";

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
                path: "/room/:roomId",
                element: <RoomDetail />,
            },
            {
                path: "/special",
                element: <Special />,
            },
            {
                path: "/sight",
                element: <SightSeeing />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={route} />;
}
