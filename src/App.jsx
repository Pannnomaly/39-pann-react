import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

export default function App ()
{
    const router = createBrowserRouter ([
        {
            path: "/",
            element: <Layout />,
            errorElement: <Error />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/owner", element: <Owner /> },
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}