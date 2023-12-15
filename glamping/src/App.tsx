import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";

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
        ],
    },
]);

export default function App() {
    return <RouterProvider router={route} />;
}
