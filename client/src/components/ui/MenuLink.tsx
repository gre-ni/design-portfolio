import { Link } from "react-router-dom";

type LinkProps = {
    name: string;
    path: string;
    icon?: string;
};

export const MenuLink = (props: LinkProps) => {
    return (
        <div className="flex gap-2">
            <img src={props.icon} className="max-w-3 h-auto" />
            <Link
                to={props.path}
                key={props.name}
                className="text-white font-serif hover:text-highlight"
            >
                {props.name}
            </Link>
        </div>
    );
};
