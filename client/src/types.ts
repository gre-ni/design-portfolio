export type LinkType = "navbar" | "github";

export type Link = {
    name: string;
    path: string;
    type: LinkType;
    icon?: string;
};

export type ProjectType = {
    id: number;
    title: string;
    slug: string;
    year: number;
    description: string;
    cover_image_url: string;
    featured: boolean;
    visible?: boolean;
    ordering: number;
    tag?: string;
};

export type ProjectDetailsType = {
    id: number;
    title: string;
    slug: string;
    year: number;
    description: string;
    cover_image_url: string;
    featured?: boolean;
    visible?: boolean;
    ordering?: number;
    tag?: string;
    story?: string;
};
