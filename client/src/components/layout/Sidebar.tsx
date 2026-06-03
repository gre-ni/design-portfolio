import { Navbar } from "../sections/Navbar.tsx";
import { navLinks } from "../../data/navLinks.ts";
import { Link } from "react-router-dom";

const navBarLinks = navLinks.filter((link) => link.type == "navbar");

export const Sidebar = () => {
    return (
        <div className="border-r border-grey md:flex md:flex-col md:h-screen md:sticky top-0 px-10 pt-12 pb-10 justify-between">
            <Link to="/">
                <img
                    src="/vectors/greni-logo-dark.svg"
                    className="max-w-20 h-auto"
                ></img>
            </Link>
            <Navbar links={navBarLinks} type="desktop" />
            <div>
                <div className="flex gap-2 py-5">
                    <a href="https://github.com/gre-ni">
                        <img
                            src="/vectors/github-logo-dark.svg"
                            className="max-w-5 h-auto text-highlight"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/nikolgreplova/">
                        <img
                            src="/vectors/linkedin-icon-dark.svg"
                            className="max-w-5 h-auto"
                        />
                    </a>
                </div>
                <p className="text-[12px]">
                    design and code <br /> © Nikol Greplova 2026
                </p>
            </div>
        </div>
    );
};
