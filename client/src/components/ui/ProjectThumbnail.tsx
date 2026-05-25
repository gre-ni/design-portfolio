import type { ProjectType } from "../../types.ts";

type ProjectThumbnailProps = {
    project: ProjectType;
};

export const ProjectThumbnail = ({ project }: ProjectThumbnailProps) => {
    return <p>{project.title}</p>;
};
