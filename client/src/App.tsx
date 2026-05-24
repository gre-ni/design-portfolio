// import { useState } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { navLinks } from "./data/navLinks";

function App() {
    const navBarLinks = navLinks.filter((link) => link.type == "navbar");

    return (
        <div>
            <Navbar links={navBarLinks} />
            <Hero />
        </div>
    );
}

export default App;
