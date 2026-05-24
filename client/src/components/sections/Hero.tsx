import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const Hero = () => {
    const highlightClass = "font-mono text-(--color-highlight)";

    const word1Ref = useRef(null); // not pointing at anything at mount
    const word2Ref = useRef(null);
    const word3Ref = useRef(null);
    const word4Ref = useRef(null);

    useEffect(() => {
        gsap.to(word1Ref.current, {
            scrambleText: {
                text: "Nikol",
                chars: "upperAndLowerCase",
                revealDelay: 0.1,
            },
            duration: 1.8,
        });
        gsap.to(word2Ref.current, {
            scrambleText: {
                text: "developer",
                chars: "upperAndLowerCase",
                revealDelay: 0.1,
            },
            duration: 1.8,
            delay: 0.1, // staggering animations of each span
        });
        gsap.to(word3Ref.current, {
            scrambleText: {
                text: "data",
                chars: "upperAndLowerCase",
                revealDelay: 0.1,
            },
            duration: 1.8,
            delay: 0.2,
        });
        gsap.to(word4Ref.current, {
            scrambleText: {
                text: "design",
                chars: "upperAndLowerCase",
                revealDelay: 0.1,
            },
            duration: 1.8,
            delay: 0.3,
        });
    }, []);

    return (
        <div className="pt-8 md:pt-12 grid grid-cols-6 gap-8">
            <h1 className="col-span-6 text-5xl/snug md:text-[4rem]/tight">
                Hi, I'm{" "}
                <span ref={word1Ref} className={highlightClass}>
                    Nikol
                </span>
                .
                <br />I am a Prague-based{" "}
                <span ref={word2Ref} className={highlightClass}>
                    developer
                </span>
                <br />
                with focus on{" "}
                <span ref={word3Ref} className={highlightClass}>
                    data
                </span>{" "}
                and
                {"\u00A0"}
                <span ref={word4Ref} className={highlightClass}>
                    design
                </span>
                .
            </h1>
            <p
                className="col-span-6 md:col-start-2 md:col-span-5 leading-normal"
                style={{ whiteSpace: "pre-line" }}
            >
                Lorem ipsum
            </p>
        </div>
    );
};
