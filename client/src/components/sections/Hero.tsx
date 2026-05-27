import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const Hero = () => {
    const highlightClass = "font-serif text-(--color-highlight)";

    const word1Ref = useRef(null); // not pointing at anything at mount
    const word2Ref = useRef(null);

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
                text: "visual designer",
                chars: "upperAndLowerCase",
                revealDelay: 0.1,
            },
            duration: 1.8,
            delay: 0.1, // staggering animations of each span
        });
    }, []);

    return (
        <div className="grid grid-cols-6 gap-8 pb-12">
            <h1 className="col-span-6 text-5xl/snug md:text-[3.5rem] leading-[1.15] font-thin antialiased">
                Hi, I'm{" "}
                <span ref={word1Ref} className={highlightClass}>
                    Nikol
                </span>
                , a Prague-based{" "}
                <span ref={word2Ref} className={highlightClass}>
                    visual designer{" "}
                </span>
                <br />
                with an extra interest in systems, data and code.
            </h1>
            <p
            // className="col-span-6 md:col-start-2 md:col-span-5 leading-normal"
            // style={{ whiteSpace: "pre-line" }}
            >
                Lorem ipsum
            </p>
        </div>
    );
};
