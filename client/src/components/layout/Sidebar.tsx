import { Navbar } from "../sections/Navbar.tsx";
import { navLinks } from "../../data/navLinks.ts";

const navBarLinks = navLinks.filter((link) => link.type == "navbar");

export const Sidebar = () => {
    return (
        <div className="border-r border-grey md:h-screen md:sticky top-0">
            <p>logo</p>
            <p>maybe links</p>
            <Navbar links={navBarLinks} />
            <p>socials</p>
            <p>footer</p>
        </div>
    );
};
