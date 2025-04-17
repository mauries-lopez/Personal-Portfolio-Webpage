import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Experience = ({setNavTitle}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitle("02 Experience");
        }
    }, [inView, setNavTitle]);
    
    return (
        <section id="experience" ref={ref} className="relative h-dvh w-dvw top-0 bg-gray-700 flex justify-center items-center" >
            <div className="relative h-full w-full bg-white flex flex-col overflow-y-scroll" style={{backgroundColor: "#1A1A1A"}}>
                <div className="relative h-full w-full flex flex-col justify-center text-white ">
                    <div className="m-5">
                        <p className="relative sm:text-6xl 3xs:text-2xl font-sans font-bold"> Research Assistant </p>
                        <a href="https://adric.dlsu.edu.ph/index.php/technology-education-entertainment-empathy-design-te3d-house/" target="_blank" rel="noopener noreferrer">
                            <p className="relative sm:text-3xl 3xs:text-lg/6 font-sans italic "> De La Salle University - Technology, Education, Entertainment, Empathy, Design (TE3D) House </p>
                        </a>
                        <p className="relative sm:text-xl 3xs:text-sm font-sans italic pt-2"> 2024 </p>
                        <p className="relative sm:text-xl 3xs:text-sm font-bold font-sans italic mt-4"> Key responsibilities </p>
                        <div className="relative sm:text-lg 3xs:text-sm font-sans italic pl-5"> 
                            <ul className="list-outside list-disc">
                                <li> Improve the chatbot dialogues and conversation flow </li>
                                <li> Perform stress testing, identify bugs, and implement fixes to improve chatbot stability and performance </li>
                                <li> Improve the web application by optimizing layout and functionality for mobile compatibility </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="text-white"></hr>
                <div className="relative h-full w-full flex flex-col justify-center text-white ">
                    <div className="m-5">
                        <p className="relative sm:text-6xl 3xs:text-2xl font-sans font-bold"> V.P. - Publicity and Creatives </p>
                        <p className="relative sm:text-3xl 3xs:text-lg font-sans italic"> La Salle Computer Society (Laguna) </p>
                        <p className="relative sm:text-xl 3xs:text-sm font-sans italic pt-2"> 2021-2024 </p>
                        <p className="relative sm:text-xl 3xs:text-sm font-bold font-sans italic mt-4"> Key responsibilities </p>
                        <div className="relative sm:text-lg 3xs:text-sm font-sans italic pl-5"> 
                            <ul className="list-outside list-disc">
                                <li> Project head activities decided by the organization </li>
                                <li> Supervise the creation and production of all promotional materials </li>
                                <li> Plan and execute marketing strategies for the organization </li>
                                <li> Manage and update the organization's social media platform </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="text-white"></hr>
                <div className="relative h-full w-full flex flex-col justify-center text-white ">
                    <div className="m-5">
                        <p className="relative sm:text-6xl 3xs:text-2xl font-sans font-bold "> Chairperson for Creatives - Office of the Campus Secretary </p>
                        <p className="relative sm:text-3xl 3xs:text-lg font-sans italic"> DLSU Laguna Campus Student Government </p>
                        <p className="relative sm:text-xl 3xs:text-sm font-sans italic  pt-2"> 2021 </p>
                        <p className="relative sm:text-xl 3xs:text-sm font-bold font-sans italic mt-4"> Key responsibilities </p>
                        <div className="relative sm:text-lg 3xs:text-sm font-sans italic pl-5"> 
                            <ul className="list-outside list-disc">
                                <li> Publish designs for the rebranding of the DLSU Laguna Campus Student Government social media platform </li>
                                <li> Design the primary template for the publication materials </li>
                                <li> Supervise the creation and production of all promotional materials </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    );
}