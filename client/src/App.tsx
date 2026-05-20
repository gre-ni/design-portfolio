// import { useState } from "react";
import { Navbar } from "./components/sections/Navbar";
import { navLinks } from "./data/navLinks";

function App() {
    const navBarLinks = navLinks.filter((link) => link.type == "navbar");

    return (
        <div>
            <Navbar links={navBarLinks} />
        </div>
    );
}

export default App;
