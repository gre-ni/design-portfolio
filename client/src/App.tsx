// import { useState } from "react";
import { Main } from "./components/sections/Main";
import { ProjectDetail } from "./components/sections/ProjectDetail";
import { Layout } from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/:name", element: <ProjectDetail /> },
]);

function App() {
    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    );
}

export default App;
