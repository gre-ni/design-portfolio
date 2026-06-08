import { ProjectList } from "./ProjectList.tsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

export const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");

    useEffect(() => {
        async function loadProjects() {
            const url = tag
                ? `${BASE_URL}api/projects?tag=${tag}`
                : `${BASE_URL}api/projects`;

            const response = await fetch(url);
            const data = await response.json();
            setProjects(data);
        }
        loadProjects();
    }, [tag]);

    return <ProjectList projects={projects} />;
};
