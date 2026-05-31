// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const Hero = () => {
    const highlightClass =
        "font-serif text-(--color-highlight) inline-flex items-end gap-4";

    // const word1Ref = useRef(null); // not pointing at anything at mount
    // const word2Ref = useRef(null);

    // useEffect(() => {
    //     gsap.to(word1Ref.current, {
    //         scrambleText: {
    //             text: "Nikol",
    //             chars: "upperAndLowerCase",
    //             revealDelay: 0.1,
    //         },
    //         duration: 1.1,
    //     });
    //     gsap.to(word2Ref.current, {
    //         scrambleText: {
    //             text: "visual designer",
    //             chars: "upperAndLowerCase",
    //             revealDelay: 0.1,
    //         },
    //         duration: 1.1,
    //         delay: 0.1, // staggering animations of each span
    //     });
    // }, []);

    // Need to add useRef to spans if I want to put the animation back

    return (
        <div className="grid grid-cols-6 gap-8 pb-10">
            <h1 className="col-span-6 text-5xl/snug md:text-[3rem] leading-[1.15] font-thin antialiased">
                Hi, I'm{" "}
                <span className={highlightClass}>
                    Nikol
                    <img
                        src="/vectors/wave-icon.svg"
                        className="max-w-10 h-auto"
                    />
                </span>
                , a Prague-based{" "}
                <span className={highlightClass}>
                    senior visual designer{" "}
                    <img
                        src="/vectors/designer-icon.svg"
                        className="max-w-12 h-auto"
                    />
                </span>
                <br />
                with an extra interest in{" "}
                <span className={highlightClass}>
                    systems
                    <img
                        src="/vectors/system-icon.svg"
                        className="max-w-12 h-auto pb-1"
                    />
                </span>
                ,{" "}
                <span className={highlightClass}>
                    data
                    <img
                        src="/vectors/data-icon.svg"
                        className="max-w-14 h-auto pb-2"
                    />
                </span>{" "}
                and{" "}
                <span className={highlightClass}>
                    code
                    <img
                        src="/vectors/code-icon.svg"
                        className="max-w-12 h-auto pb-3"
                    />
                </span>
                .
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
