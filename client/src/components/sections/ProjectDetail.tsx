import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton } from "../ui/BackButton";
import type { ProjectDetailsType, ProjectImageType, Tag } from "../../types";

export const ProjectDetail = () => {
    const { slug } = useParams();
    const [projectDetails, setProjectDetails] = useState<ProjectDetailsType[]>(
        [],
    );
    const [projectTags, setProjectTags] = useState<Tag[]>([]);
    const [projectImages, setProjectImages] = useState<ProjectImageType[]>([]);

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
        async function loadImages() {
            const response = await fetch(
                `http://127.0.0.1:5000/api/images?slug=${slug}`,
            );
            const data = await response.json();
            setProjectImages(data);
        }
        loadImages();
    }, [slug]);

    if (!projectDetails.length) return <p>Loading...</p>;

    return (
        <div>
            <div className="flex flex-col gap-4 pb-10">
                <BackButton />
                <h1>{projectDetails[0].title}</h1>
            </div>
            <div className="grid grid-cols-5 pb-10">
                <div className="col-span-1">
                    <h3>Tools</h3>
                    {projectTags
                        .filter((tag) => tag.type == "tool")
                        .map((tag) => (
                            <li>{tag.name}</li>
                        ))}
                </div>
                <div className="col-span-1">
                    <h3>Domain</h3>
                    {projectTags
                        .filter((tag) => tag.type == "industry")
                        .map((tag) => (
                            <li>{tag.name}</li>
                        ))}
                </div>
                <div className="col-span-1">
                    <h3>Year</h3>
                    <p>{projectDetails[0].year}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <img src={projectDetails[0].cover_image_url} />
                    {projectImages.map((image) => (
                        <img src={image.image_url} />
                    ))}
                </div>
                <div>{projectDetails[0].story}</div>
            </div>
        </div>
    );
};
