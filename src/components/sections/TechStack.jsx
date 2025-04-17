import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const TechStack= ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("03 Tech Stack");
        }
    }, [inView, setNavTitle]);

    return (
        <section id="tech-stack" ref={ref} className="animate-show relative h-dvh w-dvw top-0 bg-blue-500 flex justify-center items-center">

        </section>   
    );
}