import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("03 Projects");
        }
    }, [inView, setNavTitle]);
    
    return (
        <section id="projects" ref={ref} className="relative h-svh w-dvw top-0 flex justify-center items-center">
            <div className="mt-20 h-[60%] w-full bg-white/50">
                
            </div>
        </section>   
    );
}