import { Sidebar } from "./Sidebar";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="md:grid md:grid-cols-8">
            <div className="md:col-span-1">
                <Sidebar />
            </div>
            <main className="md:col-span-7 p-8 md:pt-12 md:px-16">
                {children}
            </main>
        </div>
    );
};
