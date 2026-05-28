import type { ProjectType } from "../../types.ts";
import { Link } from "react-router-dom";

type ProjectThumbnailProps = {
    project: ProjectType;
};

export const ProjectThumbnail = ({ project }: ProjectThumbnailProps) => {
    return (
        <Link to={project.slug}>
            <div className="mb-4 group overflow-hidden">
                <div className="overflow-hidden rounded-sm">
                    <img
                        src={project.cover_image_url}
                        alt={project.title}
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <h3 className="pt-3 text-[14px] group-hover:text-highlight">
                    {project.title}
                </h3>
                <p className="pt-1 text-[14px] font-light">
                    {project.description}
                </p>
            </div>
        </Link>
    );
};
