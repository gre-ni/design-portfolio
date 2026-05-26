// import { useState } from "react";
import { Hero } from "./components/sections/Hero";
import { ProjectSection } from "./components/sections/ProjectSection";
import { Layout } from "./components/layout/Layout";

function App() {
    return (
        <>
            <Layout>
                <div>
                    <Hero />
                    <ProjectSection />
                </div>
            </Layout>
        </>
    );
}

export default App;
