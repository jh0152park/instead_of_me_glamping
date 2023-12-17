import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import NotFound from "./screens/NotFound";
import Room from "./screens/Room";
import RoomDetail from "./screens/RoomDetail";
import Special from "./screens/Special";
import SightSeeing from "./screens/SightSeeing";
import Reservation from "./screens/Reservation";
import UserGuide from "./screens/UserGuide";

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
            {
                path: "/reservation",
                element: <Reservation />,
            },
            {
                path: "/userguide",
                element: <UserGuide />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={route} />;
}
