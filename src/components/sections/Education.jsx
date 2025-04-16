import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Education = ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("Education");
        }
    }, [inView, setNavTitle]);

    return (
        <section id="education" ref={ref} className="relative h-dvh w-dvw top-0 bg-green-700 flex justify-center items-center">

        </section>   
    );
}