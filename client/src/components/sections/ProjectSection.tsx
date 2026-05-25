import { ProjectList } from "./ProjectList.tsx";
import { useState, useEffect } from "react";

// import { useParams } from "react-router-dom";

export const ProjectSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const response = await fetch("http://127.0.0.1:5000/projects");
            const data = await response.json();
            setProjects(data);
        }
        loadProjects();
    }, []);

    return <ProjectList projects={projects} />;
};
