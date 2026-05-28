import { Hero } from "./Hero";
import { ProjectSection } from "./ProjectSection";
import { useSearchParams } from "react-router-dom";

export const Main = () => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");
    return (
        <div>
            {!tag && <Hero />}
            <ProjectSection />
        </div>
    );
};
