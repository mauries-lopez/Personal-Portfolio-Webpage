import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("03 Projects");
        }
    }, [inView, setNavTitle]);
    
    return (
        <section id="projects" ref={ref} className="relative h-dvh w-dvw top-0 bg-yellow-300 flex justify-center items-center">
            <div className="h-[70%] w-[70%] bg-yellow-500 ">
                
            </div>
        </section>   
    );
}