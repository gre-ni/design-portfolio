import { Link } from "react-router-dom";

type LinkProps = {
    name: string;
    path: string;
    icon?: string;
    type: "mobile" | "desktop";
};

export const MenuLink = (props: LinkProps) => {
    const icon_mobile = `${props.icon}-white.svg`;
    const icon_desktop = `${props.icon}.svg`;

    if (props.type === "mobile") {
        return (
            <div className="flex gap-6">
                <Link
                    to={props.path}
                    key={props.name}
                    className="flex gap-6 text-bg font-serif text-4xl"
                >
                    <img src={icon_mobile} className="max-w-8 h-auto pt-1" />
                    {props.name}
                </Link>
            </div>
        );
    } else {
        return (
            <div className="flex gap-3">
                <Link
                    to={props.path}
                    key={props.name}
                    className="flex gap-3 text-dark font-serif hover:text-highlight text-2xl"
                >
                    <img src={icon_desktop} className="max-w-6 h-auto" />
                    {props.name}
                </Link>
            </div>
        );
    }
};
