import { MenuLink } from "../ui/MenuLink";
import type { Link } from "../../types";

type NavbarProps = {
    links: Link[];
    type: "mobile" | "desktop";
};

export const Navbar = (props: NavbarProps) => {
    if (props.type === "mobile") {
        return (
            <div className="flex flex-col gap-8">
                {props.links.map((link) => (
                    <MenuLink
                        key={link.name}
                        name={link.name}
                        path={link.path}
                        icon={link.icon}
                        type={props.type}
                    />
                ))}
            </div>
        );
    } else {
        return (
            <div className="flex flex-col gap-2">
                {props.links.map((link) => (
                    <MenuLink
                        key={link.name}
                        name={link.name}
                        path={link.path}
                        icon={link.icon}
                        type={props.type}
                    />
                ))}
            </div>
        );
    }
};
