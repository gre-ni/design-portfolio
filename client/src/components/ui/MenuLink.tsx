import { Link } from "react-router-dom";

type LinkProps = {
    name: string;
    path: string;
    icon?: string;
};

export const MenuLink = (props: LinkProps) => {
    return (
        <div className="flex gap-3">
            <img src={props.icon} className="max-w-3 h-auto" />
            <Link
                to={props.path}
                key={props.name}
                className="text-dark font-serif hover:text-highlight text-xl"
            >
                {props.name}
            </Link>
        </div>
    );
};
