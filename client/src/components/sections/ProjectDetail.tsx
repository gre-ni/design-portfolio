import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton } from "../ui/BackButton";
import ReactMarkdown from "react-markdown";
import type { ProjectDetailsType, ProjectImageType, Tag } from "../../types";

export const ProjectDetail = () => {
    const { slug } = useParams();
    const [projectDetails, setProjectDetails] = useState<ProjectDetailsType[]>(
        [],
    );
    const [projectTags, setProjectTags] = useState<Tag[]>([]);
    const [projectImages, setProjectImages] = useState<ProjectImageType[]>([]);
    const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

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

    useEffect(() => {
        const changeWidth = (): void => {
            setCurrentWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);
        return () => window.removeEventListener("resize", changeWidth);
    }, []);

    if (!projectDetails.length) return <p>Loading...</p>;
    if (!projectImages.length) return <p>Loading...</p>;

    const markdown = projectDetails[0].story;

    if (currentWidth < 750) {
        return (
            <>
                <div className="flex flex-col gap-6 pb-2">
                    <BackButton />
                    <h1 className="text-highlight">
                        {projectDetails[0].title}
                    </h1>
                </div>
                <div>
                    <div className="text-dark pb-10">
                        {projectDetails[0].description}
                    </div>
                    <div
                        id="project-tags-mobile"
                        className="grid grid-cols-3 pb-10 gap-1"
                    >
                        <div className="col-span-1">
                            <h3 className="text-highlight pb-2">Tools</h3>
                            {projectTags
                                .filter((tag) => tag.type == "tool")
                                .map((tag) => (
                                    <p className="pt-1 text-[13px]">
                                        {tag.name}
                                    </p>
                                ))}
                        </div>
                        <div className="col-span-1">
                            <h3 className="text-highlight pb-2">Domain</h3>
                            {projectTags
                                .filter((tag) => tag.type == "industry")
                                .map((tag) => (
                                    <p className="pt-1 text-[13px]">
                                        {tag.name}
                                    </p>
                                ))}
                        </div>
                        <div className="col-span-1">
                            <h3 className="text-highlight pb-2">Year</h3>
                            <p className="pt-1 text-[13px]">
                                {projectDetails[0].year}
                            </p>
                        </div>
                    </div>
                    <div
                        id="intro-images-mobile"
                        className="flex flex-col gap-2"
                    >
                        <img
                            src={projectDetails[0].cover_image_url}
                            className="w-full h-full rounded-sm aspect-auto"
                        />
                        <img
                            src={projectImages[0].image_url}
                            className="w-full h-full object-cover rounded-sm aspect-auto"
                        />
                    </div>
                    <div className="py-6 whitespace-pre-line">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
                    <div className="flex flex-col gap-2">
                        {projectImages.slice(1).map((image) => (
                            <img
                                src={image.image_url}
                                className="w-full h-full object-cover rounded-sm aspect-auto"
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-col gap-4 pb-10">
                <BackButton />
                <h1 className="text-highlight text-[2.5rem]">
                    {projectDetails[0].title}
                </h1>
            </div>
            <div
                id="project-tags-desktop"
                className="grid grid-cols-5 pb-10 gap-1"
            >
                <div className="col-span-1">
                    <h3 className="text-highlight pb-2">Tools</h3>
                    {projectTags
                        .filter((tag) => tag.type == "tool")
                        .map((tag) => (
                            <p className="pt-1 text-[13px]">{tag.name}</p>
                        ))}
                </div>
                <div className="col-span-1">
                    <h3 className="text-highlight pb-2">Domain</h3>
                    {projectTags
                        .filter((tag) => tag.type == "industry")
                        .map((tag) => (
                            <p className="pt-1 text-[13px]">{tag.name}</p>
                        ))}
                </div>
                <div className="col-span-1">
                    <h3 className="text-highlight pb-2">Year</h3>
                    <p className="pt-1 text-[13px]">{projectDetails[0].year}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                    <img
                        src={projectDetails[0].cover_image_url}
                        className="w-full h-full rounded-sm aspect-auto"
                    />
                    {projectImages.map((image) => (
                        <img
                            src={image.image_url}
                            className="w-full h-full object-cover rounded-sm aspect-auto"
                        />
                    ))}
                </div>
                <div>
                    <div className="text-highlight text-[1.4rem] font-serif pb-6 pr-10">
                        {projectDetails[0].description}
                    </div>
                    <div className="pr-10 xl:pr-20 whitespace-pre-line">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    );
};
