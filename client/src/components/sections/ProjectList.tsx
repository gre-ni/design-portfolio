import type { ProjectType } from "../../types";
import { ProjectThumbnail } from "../ui/ProjectThumbnail";

type ProjectListProps = {
    projects: ProjectType[];
};

export const ProjectList = (props: ProjectListProps) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {props.projects.map((project) => (
                    <ProjectThumbnail project={project} key={project.id} />
                ))}
            </div>
            <p className="text-center pt-20 text-[12px]">
                Want to see more? Have a browse through specific categories :
                {")"}
            </p>
        </div>
    );
};
