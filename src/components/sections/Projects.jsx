import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("02 Projects");
        }
    }, [inView, setNavTitle]);
    
    return (
        <section id="projects" ref={ref} className="relative h-dvh w-dvw top-0 bg-yellow-300 flex justify-center items-center">

        </section>   
    );
}