export const Hero = () => {
    const highlightClass =
        "font-serif text-(--color-highlight) inline-flex w-fit items-end justify-start gap-4";

    return (
        <div className="grid grid-cols-6 gap-8 pb-10">
            <h1 className="col-span-6 text-5xl/snug text-[2rem ]md:text-[3rem] leading-[1.15] font-thin antialiased">
                Hi, I'm{" "}
                <span className={highlightClass}>
                    Nikol
                    <img
                        src="/vectors/wave-icon.svg"
                        className="max-w-10 h-auto"
                    />
                </span>
                , a Prague-based{" "}
                <span className={highlightClass}>senior visual</span>{" "}
                <span className={highlightClass}>
                    designer{" "}
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
            <p className="col-span-6 lg:pr-20">
                Welcome to my collection of design projects, hosting everything
                from traditional illustration to digital corporate marketing
                assets. If{""}&nbsp;you’re curious about my more technical work,
                here is a{" "}
                <a
                    href="https://greni.dev/"
                    className="underline text-highlight"
                >
                    link
                </a>{" "}
                to my other development-focused portfolio.
            </p>
        </div>
    );
};
