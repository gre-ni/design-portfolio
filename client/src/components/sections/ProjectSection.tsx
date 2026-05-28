import { ProjectList } from "./ProjectList.tsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// import { useParams } from "react-router-dom";

export const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");

    useEffect(() => {
        async function loadProjects() {
            const url = tag
                ? `http://127.0.0.1:5000/api/projects?tag=${tag}`
                : `http://127.0.0.1:5000/api/projects`;

            const response = await fetch(url);
            const data = await response.json();
            setProjects(data);
        }
        loadProjects();
    }, [tag]);

    return <ProjectList projects={projects} />;
};
