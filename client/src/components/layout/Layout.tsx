import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
    return (
        <div className="md:grid md:grid-cols-9 lg:grid-cols-8">
            <div className="md:col-span-2 lg:col-span-1">
                <Sidebar />
            </div>
            <main className="md:col-span-7 lg:col-span-7 p-8 md:pt-12 md:px-12">
                <Outlet />
            </main>
        </div>
    );
};
