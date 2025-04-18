import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";


export const About = ( {setNavTitle, animateAboutBGClass, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor} ) => {

    const [introductionDivName, setIntroductionDivName] = useState("+ Introduction");
    const [introductionDivBtnDisplay, setIntroductionDivBtnDisplay] = useState("block");
    const [introductionDisplay, setIntroductionDisplay] = useState("hidden");

    const [researchInterestDivName, setResearchInterestDivName] = useState("+ Research Interest");
    const [researchInterestDivBtnDisplay, setResearchInterestDivBtnDisplay] = useState("block");
    const [researchInterestDisplay, setResearchInterestDisplay] = useState("hidden");

    const [educationDivName, setdEudcationDivName] = useState("+ Education");
    const [educationDivBtnDisplay, setEducationDivBtnDisplay] = useState("block");
    const [educationDisplay, setEducationDisplay] = useState("hidden");
    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            // Recolor (default)
            setNavTitleColor("text-white");
            setNavBarColor("#1A1A1A");
            setNavMainMenuBtnColor("bg-white");
            setNavSocialColor("");

            setNavTitle("01 About Me");
            setTimeout(() => {
                setAnimateAboutBGClass("animate-scaleIn-bg");
            }, 30);
        }
    }, [inView, setNavTitle]);
    

    function introductionClick(){
        if ( introductionDisplay == "hidden" ){
            // Force hide all info
            setResearchInterestDivBtnDisplay("hidden");
            setResearchInterestDisplay("hidden");
            setEducationDivBtnDisplay("hidden");
            setEducationDisplay("hidden");

            setIntroductionDisplay("block");
            setIntroductionDivName("− Introduction")
        } else {
            setIntroductionDisplay("hidden");
            setIntroductionDivName("+ Introduction")

            // Show buttons
            setResearchInterestDivBtnDisplay("block");
            setEducationDivBtnDisplay("block");
        };
    };
    
    function researchInterestClick(){
        if ( researchInterestDisplay == "hidden" ){
            setEducationDivBtnDisplay("hidden");
            setEducationDisplay("hidden");
            setIntroductionDivBtnDisplay("hidden");
            setIntroductionDisplay("hidden");

            setResearchInterestDisplay("block");
            setResearchInterestDivName("− Research Interest")
        } else {
            setResearchInterestDisplay("hidden");
            setResearchInterestDivName("+ Research Interest")

            setEducationDivBtnDisplay("block");
            setIntroductionDivBtnDisplay("block");
        };
    };

    function educationDisplayClick(){
        if ( educationDisplay == "hidden" ){
            setIntroductionDivBtnDisplay("hidden");
            setIntroductionDisplay("hidden");
            setResearchInterestDivBtnDisplay("hidden");
            setResearchInterestDisplay("hidden");

            setEducationDisplay("block");
            setdEudcationDivName("− Education")
        } else {
            setEducationDisplay("hidden");
            setdEudcationDivName("+ Education")

            setIntroductionDivBtnDisplay("block");
            setResearchInterestDivBtnDisplay("block");
        };
    };

    return (
        <section id="about" ref={ref} className="relative h-full w-full top-0 flex flex-col justify-center items-center bg-black/95 overflow-hidden" >
            <div className={`absolute inset-0 bg-black/95 bg-cover bg-fixed bg-center blur-xs z-0 scale-[1.1] ${animateAboutBGClass}`} style={{ backgroundImage: "url(/aboutMeBG.png)" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(0,0,0,1), transparent)", pointerEvents: "none"}}/></div>
            <div className="relative h-[70%] sm:w-[50%] 3xs:w-[80%] flex flex-col justify-center items-center ">
                <div id="imageDiv" className="relative xl:h-[420px] xl:w-[500px] lg:h-[340px] lg:w-[400px] md:h-[260px] md:w-[300px] sm:h-[200px] sm:w-[250px] 3xs:h-[200px] 3xs:w-[230px] flex flex-col 3xs:pb-5 justify-center items-center bg-fixed">
                    <div className="relative xl:h-[420px] xl:w-[500px] lg:h-[340px] lg:w-[400px] md:h-[260px] md:w-[300px] sm:h-[200px] sm:w-[250px] 3xs:h-[200px] 3xs:w-[230px] bg-no-repeat bg-cover bg-bottom mask-radial-from-99% mask-radial-[40%_50%] " style={{backgroundImage: "url(/profilePictureWbg.jpg"}}>
                    </div>
                </div>
                <div className="relative w-full md:pt-0  flex flex-col justify-center items-center  bg-black/60 rounded-2xl">
                    <div id="nameDiv" className="relative md:p-5 3xs:p-2 text-white md:text-5xl 3xs:text-4xl font-bold font-sans text-center break-words flex justify-center items-center">
                        Mauries Lopez
                    </div>
                    <div className="relative w-full flex flex-col justify-start md:overflow-hidden 3xs:overflow-y-scroll rounded-2xl space-y-0.5"> 
                        <div id="subNameDiv" className={`relative ${introductionDivBtnDisplay} bg-white text-black md:text-2xl 3xs:text-xl italic font-bold font-sans text-start break-words p-3 cursor-pointer hover:bg-white/80`} onClick={introductionClick}>
                            {introductionDivName}
                        </div>
                        <div id="introDiv" className={`${introductionDisplay}`}>
                            <div className="m-3">
                                <div id="subNameDiv" className="relative text-white md:text-2xl 3xs:text-lg italic font-bold font-sans text-start break-words ">
                                    B.S. Computer Science Student
                                </div>
                                <div id="subSchoolNameDiv" className="relative  text-white md:text-xl 3xs:text-md italic font-bold font-sans text-start break-words ">
                                    De La Salle University
                                </div>
                                <div id="shortIntroDiv" className="relative text-white md:text-xl 3xs:text-md font-sans text-justify break-words pt-3">
                                        My passion for coding and curiosity have led me to work on diverse projects, as I continuously seek opportunities to learn and grow. I thrive on challenges that push me to expand my skills and think creatively.
                                </div> 
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div id="subNameDiv" className={`relative ${researchInterestDivBtnDisplay} bg-white text-black md:text-2xl 3xs:text-xl italic font-bold font-sans text-start break-words p-3 cursor-pointer hover:bg-white/80`} onClick={researchInterestClick}>
                                {researchInterestDivName}
                            </div>
                            <div id="researchInterestContentDiv" className={`${researchInterestDisplay}`}>
                                <div className="text-white md:text-xl 3xs:text-md font-sans break-words m-3">
                                    <ul className="list-inside list-decimal">
                                        <li> Deep Learning </li>
                                        <li> Sentiment Analysis </li>
                                        <li> Natural Language Processing </li>
                                        <li> Neural Networks (Encoders) </li>
                                    </ul>
                                    <div className="text-white font-sans pt-3 text-justify italic">
                                        Currently working on a thesis about "Exploring Transformer-based Approaches in Sentiment Prediction of Philippine Tweets."
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div id="subNameDiv" className={`relative ${educationDivBtnDisplay} bg-white text-black md:text-2xl 3xs:text-xl italic font-bold font-sans text-start break-words p-3 cursor-pointer hover:bg-white/80`} onClick={educationDisplayClick}>
                                {educationDivName}
                            </div>
                            <div id="educationContentDiv" className={`${educationDisplay}`}>
                                <div className="text-white md:text-xl 3xs:text-md font-sans break-words m-3">
                                    <div className="text-white font-sans text-justify">
                                        <p className="font-bold">De La Salle University</p> 
                                        <p className="italic text-sm"> 2021-2025</p>
                                        <p>Bachelor of Science in Computer Science Major in Software Technology</p>
                                    </div>
                                    <hr className="mt-3"></hr>
                                    <div className="text-white font-sans pt-3 text-justify">
                                        <p className="font-bold">Mapúa Malayan Colleges Laguna</p> 
                                        <p className="italic text-sm">2019-2021 (Senior Highschool)</p>
                                        <p>Science, Technology, Engineering, and Mathematics Track</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="arrowDownDiv" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 h-[10%] w-[10%] flex justify-center items-center">
                <Link to="experience" spy={true} smooth={true} offset={-64} duration={500}>
                    <div className="flex size-12 md:animate-bounce 3xs:animate-pulse 3xs:mb-4 items-center justify-center rounded-full md:bg-black p-2 ring-1 md:ring-gray-900/100 md:dark:bg-white/30 md:dark:ring-white/100 cursor-pointer">
                        <svg className="size-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </Link>
            </div>
        </section>   
    );
}