import { useParams } from "react-router-dom";

export const ProjectDetail = () => {
    const { name } = useParams();

    return (
        <div>
            <p>This is where project description goes for {name}.</p>
        </div>
    );
};
