export type LinkType = "navbar" | "github";

export type Link = {
    name: string;
    path: string;
    type: LinkType;
    icon?: string;
};
