// import { useState } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { navLinks } from "./data/navLinks";
import { ProjectSection } from "./components/sections/ProjectSection";

function App() {
    const navBarLinks = navLinks.filter((link) => link.type == "navbar");

    return (
        <div>
            <Navbar links={navBarLinks} />
            <Hero />
            <ProjectSection />
        </div>
    );
}

export default App;
