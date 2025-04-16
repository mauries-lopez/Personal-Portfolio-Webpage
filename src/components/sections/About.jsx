import { Link } from "react-scroll";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const About = ( {setNavTitle} ) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("About Me");
        }
    }, [inView, setNavTitle]);

    return (
        <section id="about" ref={ref} className="relative h-dvh w-dvw top-0 flex flex-col justify-center items-center bg-black/95 ">
            <div className="relative h-full w-[70%] flex flex-row justify-center items-center">
                <div className="relative h-full w-full min-w-[35%] max-w-[100%] flex justify-center items-center animate-pop">
                    <div className="relative h-auto min-h-[60%] max-h-[40%] w-auto flex flex-col overflow-y-auto "> 
                        <div id="nameDiv" className="relative bg-white pt-5 pb-5 pl-3 text-black md:text-4xl font-bold font-sans text-start break-words flex justify-start items-center">
                            Mauries Lopez
                        </div>
                        <div id="subNameDiv" className="relative text-white md:text-2xl italic font-bold font-sans text-start break-words pt-5">
                            B.S. Computer Science Student
                        </div>
                        <div id="subSchoolNameDiv" className="relative text-white md:text-lg italic font-bold font-sans text-start break-words pb-5">
                            De La Salle University
                        </div>
                        <div id="shortIntroDiv" className="relative text-white md:text-xl font-sans text-justify break-words pb-5">
                                My passion for coding and curiosity have led me to work on diverse projects, as I continuously seek opportunities to learn and grow. I thrive on challenges that push me to expand my skills and think creatively.
                        </div>
                        <div id="subNameDiv" className="relative bg-white text-black md:text-xl font-bold font-sans text-start break-words p-3">
                            Research Interest
                        </div>
                        <div className="text-white text-xl font-sans pt-5">
                            <ul className="list-inside list-decimal">
                                <li> Deep Learning </li>
                                <li> Sentiment Analysis </li>
                                <li> Natural Language Processing </li>
                                <li> Neural Networks (Encoders) </li>
                            </ul>
                        </div>
                        <div className="text-white text-md font-sans pt-3 text-justify italic">
                            Working on a thesis about "Exploring Transformer-based Approaches in Sentiment Prediction of Philippine Tweets."
                        </div>
                    </div>
                </div>
                <div id="imageDiv" className="relative h-full w-full min-w-[65%] md:flex flex-col justify-center items-center bg-fixed 3xs:hidden ">
                    <div className="relative h-[60%] min-h-60 w-full min-w-[90%] max-w-[90%] bg-no-repeat bg-cover bg-bottom mask-radial-from-90% mask-radial-[40%_50%] animate-pop" style={{backgroundImage: "url(/profilePictureWbg.jpg"}}>
                    </div>
                </div>
            </div>
            <div id="arrowDownDiv" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 h-[10%] w-[10%] flex justify-center items-center">
                <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="-lg flex size-12 animate-bounce items-center justify-center rounded-full bg-black p-2 ring-1 ring-gray-900/100 dark:bg-black/30 dark:ring-black/100 cursor-pointer">
                        <svg className="size-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </Link>
            </div>
        </section>   
    );
}