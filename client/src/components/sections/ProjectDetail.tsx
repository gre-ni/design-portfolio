import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton } from "../ui/BackButton";
import type { ProjectDetailsType } from "../../types";

export const ProjectDetail = () => {
    const { slug } = useParams();
    const [projectDetails, setProjectDetails] = useState<ProjectDetailsType[]>(
        [],
    );

    useEffect(() => {
        async function loadProject() {
            const response = await fetch(
                `http://127.0.0.1:5000/api/detail?slug=${slug}`,
            );
            const data = await response.json();
            setProjectDetails(data);
        }
        loadProject();
    }, [slug]);

    if (!projectDetails.length) return <p>Loading...</p>;

    return (
        <div>
            <BackButton />
            <h1>{projectDetails[0].title}</h1>
        </div>
    );
};
