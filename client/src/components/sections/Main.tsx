import { Hero } from "./Hero";
import { BackButton } from "../ui/BackButton";
import { ProjectSection } from "./ProjectSection";
import { useSearchParams } from "react-router-dom";

const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Main = () => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");
    return (
        <div>
            {!tag && <Hero />}
            {tag && (
                <div className="pb-12 flex flex-col gap-4">
                    <BackButton />
                    <h1>{`${capitalise(tag)} Projects`}</h1>
                </div>
            )}
            <ProjectSection />
        </div>
    );
};
