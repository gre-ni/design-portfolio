import { MenuLink } from "../ui/MenuLink";
import type { Link } from "../../types";

type NavbarProps = {
    links: Link[];
};

export const Navbar = (props: NavbarProps) => {
    return (
        <div className="flex md:flex-col gap-2">
            {props.links.map((link) => (
                <MenuLink
                    key={link.name}
                    name={link.name}
                    path={link.path}
                    icon={link.icon}
                />
            ))}
        </div>
    );
};
