import { Link } from "react-router-dom";

export const BackButton = () => {
    return (
        <Link to="/">
            <div className="flex gap-2">
                <img
                    src="/vectors/arrow-icon.svg"
                    className="max-w-5 h-auto pb-1"
                />
                <p className="text-dark">Back to all projects</p>
            </div>
        </Link>
    );
};
