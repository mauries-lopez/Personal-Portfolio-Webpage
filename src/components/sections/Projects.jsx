import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = ({title, number, description, image, hrefFile, hrefDownloadName, hrefText, reverse = false, projectId, projectRef = {}, setNavTitle, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor}) => {

    const [learnMoreBool, setLearnMoreBool] = useState(false);

    const learnMoreShow = () => {
        setLearnMoreBool(true);
    }

    const learnMoreHide = () => {
        setLearnMoreBool(false);
    }
    
    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    const setProjectNode = useCallback((node) => {
        ref(node);
        projectRef.current = node;
    }, [ref, projectRef]);

    const [ project0Bool, setProject0Bool ] = useState(false);
    const [ project1Bool, setProject1Bool ] = useState(false);
    const [ project2Bool, setProject2Bool ] = useState(false);
    const [ project3Bool, setProject3Bool ] = useState(false);
    const [ project4Bool, setProject4Bool ] = useState(false);
    const [ project5Bool, setProject5Bool ] = useState(false);

    useEffect(() => {
        if (inView) {
            setNavTitleColor("text-[#1A1A1A]");
            setNavBarColor("#F0F0F090"); // Fixed: lowercase 'f' in hex code
            setNavMainMenuBtnColor("bg-[#1A1A1A]");
            setNavSocialColor("filter invert");
                
            setNavTitle("03 Projects");
        
            if (projectRef.current.id == "project0"){
                console.log(projectRef.current.id);
            } else{
                console.log("switched");
            }
            
        }
    }, [inView, setNavTitle, hrefFile, hrefDownloadName, hrefText, projectRef]);

    return (
        <section id={projectId} ref={setProjectNode} className="relative h-lvh w-svw justify-center items-center bg-[#F0F0F0]">
            <div className={`h-full w-full flex 3xs:flex-col ${reverse ? 'md:flex-row-reverse':'md:flex-row'} justify-center items-center`}>
                <div className="sm:h-full 3xs:h-[50%] w-full flex  justify-center items-center p-3 mt-3 z-10" > 
                    <div className="h-full w-[90%] flex flex-col justify-center items-start">
                        <p className="md:text-9xl 3xs:text-6xl font-sans font-bold">{number}</p>
                        <a href={`${hrefFile}`} download={`${hrefDownloadName}`} target="_blank" className="animate-pulse">
                            <p className="md:text-6xl 3xs:text-2xl font-sans font-bold mt-5">{title}</p>
                        </a>
                        <p className="md:text-xl 3xs:text-md font-sans mt-2 mb-3 overflow-y-auto">{description}</p>
                    </div>
                </div>
                
                <div id="image0" className="relative md:flex md:h-full 3xs:h-[40%] w-full 3xs:w-full md:mask-radial-from-99% md:mask-radial-[40%_40%] overflow-hidden z-10" onMouseEnter={learnMoreShow} onMouseLeave={learnMoreHide}>
                    <div className={`absolute bg-fixed h-full w-full duration-500 bg-cover scale-100 bg-no-repeat ${learnMoreBool? 'blur-xs':''}`} style={{ backgroundImage: `url(${image})`}} />
                    <a href={`${hrefFile}`} download={`${hrefDownloadName}`} target="_blank" >
                        <div className={`absolute cursor-pointer flex flex-col justify-center items-center h-full w-full bg-[#F0F0F0]/60 duration-500 3xs:opacity-100 ${learnMoreBool ? 'md:opacity-100' : 'md:opacity-0'}`}>
                            <p className="text-5xl font-bold pt-3 text-[#1A1A1A]">{hrefText}</p>
                            <p className="text-[0.7rem] italic pt-3 text-[#1A1A1A]">Image was generated from Meta AI</p>
                        </div>
                    </a>
                </div>

                <div className="3xs:absolute md:hidden h-full w-full ">
                    <div className={`h-full w-full animate-pulse flex items-center justify-end`} style={{ position: "absolute", bottom: 0, right: 0, height: "100%", width: "20%", pointerEvents: "none"}}>
                        <svg className="w-[35px] h-[35px] text-gray-800 animate-sideBounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                        </svg>
                    </div>
                </div>
            </div>

        </section>   
    );
}