import { navLinks } from "../../data/navLinks.ts";
import { Navbar } from "../sections/Navbar.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const navBarLinks = navLinks.filter((link) => link.type == "navbar");

export const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        // eslint-disable-next-line
        setMenuOpen(false);
    }, [location]);

    const changeOpen = () => {
        if (menuOpen) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    };

    if (menuOpen) {
        return (
            <div className="flex flex-col justify-between h-screen w-screen sticky bg-highlight p-8">
                <div className="flex justify-end">
                    <button onClick={changeOpen}>
                        <Link to="/">
                            <img
                                src="/vectors/exit-icon-white.svg"
                                className="max-w-6 h-auto"
                            />
                        </Link>
                    </button>
                </div>
                <div className="p-8">
                    <Navbar links={navBarLinks} type="mobile" />
                </div>
                <div className="">
                    <div className="flex justify-end gap-7 pt-5">
                        <a href="https://github.com/gre-ni">
                            <img
                                src="/vectors/github-logo-white.svg"
                                className="max-w-7 h-auto text-highlight"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/nikolgreplova/">
                            <img
                                src="/vectors/linkedin-icon-white.svg"
                                className="max-w-7 h-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="flex justify-between p-8">
            <img
                src="/vectors/greni-logo-dark.svg"
                className="max-w-16 h-auto"
            />
            <button onClick={changeOpen}>
                <img src="/vectors/menu-icon.svg" className="max-w-6 h-auto" />
            </button>
        </div>
    );
};
