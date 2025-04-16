import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Experience = ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("Experience");
        }
    }, [inView, setNavTitle]);
    
    return (
        <section id="experience" ref={ref} className="relative h-dvh w-dvw top-0 bg-gray-700 flex justify-center items-center">

        </section>   
    );
}