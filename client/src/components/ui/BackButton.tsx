import { Link } from "react-router-dom";

export const BackButton = () => {
    return (
        <Link to="/">
            <div className="flex gap-2">
                <img
                    src="/vectors/link-icon-dark.svg"
                    className="max-w-4 h-auto"
                />
                <p>Back to all projects</p>
            </div>
        </Link>
    );
};
