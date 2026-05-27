import { Sidebar } from "./Sidebar";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-1">
                <Sidebar />
            </div>
            <main className="col-span-7 p-8 md:pt-12 md:px-16">{children}</main>
        </div>
    );
};
