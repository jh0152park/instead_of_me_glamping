import {
    RouterProvider,
    createBrowserRouter,
    createHashRouter,
} from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import NotFound from "./screens/NotFound";
import Room from "./screens/Room";
import RoomDetail from "./screens/RoomDetail";
import Special from "./screens/Special";
import SightSeeing from "./screens/SightSeeing";
import Reservation from "./screens/Reservation";
import UserGuide from "./screens/UserGuide";
import { useSetRecoilState } from "recoil";
import { currentMode } from "./ProjectCommon";
import { useEffect } from "react";
import License from "./screens/License";

// for test annotation
const route = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "room",
                element: <Room />,
            },
            {
                path: "room/:roomId",
                element: <RoomDetail />,
            },
            {
                path: "special",
                element: <Special />,
            },
            {
                path: "sight",
                element: <SightSeeing />,
            },
            {
                path: "reservation",
                element: <Reservation />,
            },
            {
                path: "userguide",
                element: <UserGuide />,
            },
            {
                path: "license",
                element: <License />,
            },
        ],
    },
    {
        path: "/instead_of_me_glamping",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "room",
                element: <Room />,
            },
            {
                path: "room/:roomId",
                element: <RoomDetail />,
            },
            {
                path: "special",
                element: <Special />,
            },
            {
                path: "sight",
                element: <SightSeeing />,
            },
            {
                path: "reservation",
                element: <Reservation />,
            },
            {
                path: "userguide",
                element: <UserGuide />,
            },
            {
                path: "license",
                element: <License />,
            },
        ],
    },
]);

export default function App() {
    const setCurrentMode = useSetRecoilState(currentMode);

    useEffect(() => {
        if (window.document.documentElement.clientWidth < 500) {
            setCurrentMode("mobile");
        } else {
            setCurrentMode("web");
        }
    }, []);

    return <RouterProvider router={route} />;
}
