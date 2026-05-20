type LinkProps = {
    name: string;
    path: string;
};

export const MenuLink = (props: LinkProps) => {
    return (
        <a href={props.path} key={props.name}>
            {props.name}
        </a>
    );
};
