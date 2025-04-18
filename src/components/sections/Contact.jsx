import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Contact = ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("05 Contacts");
        }
    }, [inView, setNavTitle]);

    return (
        <section id="contact" ref={ref} className="relative h-svh w-dvw top-0 bg-amber-950 flex justify-center items-center">

        </section>   
    );
}