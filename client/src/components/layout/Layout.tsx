import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MobileMenu } from "../sections/MobileMenu";
import { useState, useEffect } from "react";

export const Layout = () => {
    const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const changeWidth = (): void => {
            setCurrentWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);
        return () => window.removeEventListener("resize", changeWidth);
    }, []);

    if (currentWidth < 750) {
        return (
            <div className="">
                <div className="">
                    <MobileMenu />
                </div>
                <main className="p-8 md:pt-10 md:px-12">
                    <Outlet />
                </main>
            </div>
        );
    }
    return (
        <div className="flex">
            <div className="max-w-sm min-">
                <Sidebar />
            </div>
            <main className="p-8 md:pt-10 md:px-12">
                <Outlet />
            </main>
        </div>
    );
};
