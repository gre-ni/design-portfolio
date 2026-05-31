import type { ProjectType } from "../../types.ts";
import { Link } from "react-router-dom";

type ProjectThumbnailProps = {
    project: ProjectType;
};

export const ProjectThumbnail = ({ project }: ProjectThumbnailProps) => {
    return (
        <Link to={project.slug}>
            <div className="mb-4 group overflow-hidden">
                <div className="overflow-hidden rounded-sm relative h-60 2xl:h-76">
                    <img
                        src={project.cover_image_url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-highlight/0 group-hover:bg-highlight/90 mix-blend-multiply scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-220"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-between p-8">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-white">{project.title}</h2>
                            {/* <p className="pt-1 text-[14px] text-white font-light">
                                {project.description}
                            </p> */}
                        </div>
                        <span className="text-white">View project</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
