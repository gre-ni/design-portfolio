import { Main } from "./components/sections/Main";
import { Layout } from "./components/layout/Layout";
import { ProjectDetail } from "./components/sections/ProjectDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Main /> },
            { path: "/:slug", element: <ProjectDetail /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
