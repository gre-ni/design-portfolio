import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton } from "../ui/BackButton";
import type { ProjectDetailsType, Tag } from "../../types";

export const ProjectDetail = () => {
    const { slug } = useParams();
    const [projectDetails, setProjectDetails] = useState<ProjectDetailsType[]>(
        [],
    );
    const [projectTags, setProjectTags] = useState<Tag[]>([]);

    useEffect(() => {
        async function loadProject() {
            const response = await fetch(
                `http://127.0.0.1:5000/api/detail?slug=${slug}`,
            );
            const data = await response.json();
            setProjectDetails(data);
        }
        loadProject();
        async function loadTags() {
            const response = await fetch(
                `http://127.0.0.1:5000/api/tags?slug=${slug}`,
            );
            const data = await response.json();
            setProjectTags(data);
        }
        loadTags();
    }, [slug]);

    if (!projectDetails.length) return <p>Loading...</p>;

    return (
        <div>
            <div>
                <BackButton />
                <h1>{projectDetails[0].title}</h1>
            </div>
            <div>
                <h3>Year</h3>
                <p>{projectDetails[0].year}</p>
            </div>
            <div>
                <h3>Category</h3>
                {projectTags
                    .filter((tag) => tag.type == "category")
                    .map((tag) => (
                        <li>{tag.name}</li>
                    ))}
            </div>
            <div>
                <h3>Tools</h3>
                {projectTags
                    .filter((tag) => tag.type == "tool")
                    .map((tag) => (
                        <li>{tag.name}</li>
                    ))}
            </div>
            <div>
                <h3>Industry</h3>
                {projectTags
                    .filter((tag) => tag.type == "industry")
                    .map((tag) => (
                        <li>{tag.name}</li>
                    ))}
            </div>
        </div>
    );
};
