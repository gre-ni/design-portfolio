import type { ProjectType } from "../../types";
import { ProjectThumbnail } from "../ui/ProjectThumbnail";

type ProjectListProps = {
    projects: ProjectType[];
};

export const ProjectList = (props: ProjectListProps) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {props.projects.map((project) => (
                <ProjectThumbnail project={project} key={project.id} />
            ))}
        </div>
    );
};
