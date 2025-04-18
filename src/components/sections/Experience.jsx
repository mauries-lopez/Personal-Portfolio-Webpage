import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import './Experience.css'

export const Experience = ({ setNavTitle, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor}) => {
    // Refs for section
    const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.9 });

    // Individual refs for each block
    const {ref: block0Ref, inView: block0InView} = useInView({ threshold: 0.5});
    const {ref: block1Ref, inView: block1InView} = useInView({ threshold: 0.5});
    const {ref: block2Ref, inView: block2InView}= useInView({ threshold: 0.5});
    
    // Boolean for animation per block
    const [block0Bool, setBlock0Bool] = useState(false);
    const [block1Bool, setBlock1Bool] = useState(false);
    const [block2Bool, setBlock2Bool] = useState(false);

    useEffect(() => {
        if (sectionInView) {
            //Recolor (invert)
            setNavTitleColor("text-[#1A1A1A]");
            setNavBarColor("#Ffffff");
            setNavMainMenuBtnColor("bg-[#1A1A1A]");
            setNavSocialColor("filter invert");

            setNavTitle("02 Experience");
            setAnimateAboutBGClass("animate-scaleOut-bg");
            if (!block0InView){
                setBlock0Bool(true)
                setTimeout(() => {
                    setBlock1Bool(true)
                }, 600);
                setTimeout(() => {
                    setBlock2Bool(true)
                }, 1200);
            }
        }

    }, [sectionInView, block0InView, block1InView, block2InView, setNavTitle]);


    return (
        <section id="experience" ref={sectionRef} className="relative h-dvh w-dvw top-0 bg-gray-700 flex justify-center items-center">
            <div className="relative h-full w-full bg-white flex flex-col overflow-y-scroll" style={{ backgroundColor: "#1A1A1A" }}>
                <div id="block-0" ref={block0Ref} className={`relative h-full w-full flex flex-col justify-center text-white ${block0Bool ? 'animate-block-slide-out' : 'animate-block-slide-in'}`}>
                    <div className="md:ml-10 3xs:ml-5">
                        <p className="sm:text-6xl 3xs:text-2xl font-sans font-bold">Research Assistant</p>
                        <a href="https://adric.dlsu.edu.ph/index.php/technology-education-entertainment-empathy-design-te3d-house/" target="_blank" rel="noopener noreferrer">
                            <p className="sm:text-3xl 3xs:text-lg font-sans italic">De La Salle University - TE3D House</p>
                        </a>
                        <p className="sm:text-xl 3xs:text-sm font-sans italic pt-2">2024</p>
                        <p className="sm:text-xl 3xs:text-sm font-bold font-sans italic mt-4">Key responsibilities</p>
                        <ul className="sm:text-lg 3xs:text-sm font-sans italic pl-5 list-disc">
                            <li>Improve the chatbot dialogues and conversation flow</li>
                            <li>Perform stress testing, identify bugs, and implement fixes</li>
                            <li>Improve the web application for mobile compatibility</li>
                        </ul>
                    </div>
                </div>

                <hr className="text-white" />

                <div id="block-1" ref={block1Ref} className={`relative h-full w-full flex flex-col justify-center text-white ${block1Bool ? 'animate-block-slide-out' : 'animate-block-slide-in'}`}>
                    <div className="md:ml-10 3xs:ml-5">
                        <p className="sm:text-6xl 3xs:text-2xl font-sans font-bold">V.P. - Publicity and Creatives</p>
                        <p className="sm:text-3xl 3xs:text-lg font-sans italic">La Salle Computer Society (Laguna)</p>
                        <p className="sm:text-xl 3xs:text-sm font-sans italic pt-2">2021-2024</p>
                        <p className="sm:text-xl 3xs:text-sm font-bold font-sans italic mt-4">Key responsibilities</p>
                        <ul className="sm:text-lg 3xs:text-sm font-sans italic pl-5 list-disc">
                            <li>Project head activities</li>
                            <li>Supervise promotional material production</li>
                            <li>Execute marketing strategies</li>
                            <li>Manage social media platform</li>
                        </ul>
                    </div>
                </div>

                <hr className="text-white" />

                <div id="block-2" ref={block2Ref} className={`relative h-full w-full flex flex-col justify-center text-white ${block2Bool ? 'animate-block-slide-out' : 'animate-block-slide-in'}`}>
                    <div className="md:ml-10 3xs:ml-5">
                        <p className="sm:text-6xl 3xs:text-2xl font-sans font-bold">Chairperson for Creatives</p>
                        <p className="sm:text-3xl 3xs:text-lg font-sans italic">DLSU Laguna Campus Student Government</p>
                        <p className="sm:text-xl 3xs:text-sm font-sans italic pt-2">2021</p>
                        <p className="sm:text-xl 3xs:text-sm font-bold font-sans italic mt-4">Key responsibilities</p>
                        <ul className="sm:text-lg 3xs:text-sm font-sans italic pl-5 list-disc">
                            <li>Rebrand social media design</li>
                            <li>Design publication templates</li>
                            <li>Supervise production of promo materials</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};