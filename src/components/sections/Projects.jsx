import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = ({title, number, description, image, hrefFile, hrefDownloadName, hrefText, reverse = false, projectId, projectRef = {}, projectTags, setNavTitle, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor}) => {

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
    const [ project6Bool, setProject6Bool ] = useState(false);

    useEffect(() => {
        if (inView) {
            setNavTitleColor("text-[#1A1A1A]");
            setNavBarColor("#F0F0F0"); // Fixed: lowercase 'f' in hex code
            setNavMainMenuBtnColor("bg-[#1A1A1A]");
            setNavSocialColor("filter invert");   
            setNavTitle("03 Projects");
        
            if (projectRef.current.id == "project0"){
                setProject0Bool(true);
            } else if (projectRef.current.id == "project1") {
                setProject1Bool(true);
            } else if (projectRef.current.id == "project2") {
                setProject2Bool(true);
            } else if (projectRef.current.id == "project3") {
                setProject3Bool(true);
            } else if (projectRef.current.id == "project4") {
                setProject4Bool(true);
            } else if (projectRef.current.id == "project5") {
                setProject5Bool(true);
            } else if (projectRef.current.id == "project6") {
                setProject6Bool(true);
            }
        }
    }, [inView, setNavTitle, hrefFile, hrefDownloadName, hrefText]);

    return (
        <section id={projectId} ref={setProjectNode} className="relative h-lvh w-svw justify-center items-center bg-[#F0F0F0]">
            <div className={`h-full w-full flex 3xs:flex-col ${reverse ? 'md:flex-row-reverse':'md:flex-row'} justify-center items-center`}>
                <div className="sm:h-full 3xs:h-[50%] w-full flex  justify-center items-center p-3 mt-3 z-10" > 
                    <div className="h-full w-[80%] flex flex-col justify-center items-start">
                        <p className="md:text-9xl 3xs:text-2xl font-sans font-bold pointer-events-none">{number}</p>
                        <a href={`${hrefFile}`} download={`${hrefDownloadName}`} target="_blank" className="animate-pulse">
                            <p className="md:text-6xl 3xs:text-xl font-sans font-bold mt-5">{title}</p>
                        </a>
                        <div className="w-full flex flex-row space-x-1 space-y-1 items-start mt-5 flex-wrap pointer-events-none">
                            <div className="bg-[#1A1A1A90] rounded-full pl-2 pr-2 text-white font-sans italic text-[0.8em]">
                                <p>{projectTags?.tag0 || 'No Tag'}</p>
                            </div>
                            <div className="bg-[#1A1A1A90] rounded-full pl-2 pr-2 text-white font-sans italic text-[0.8em]">
                                <p>{projectTags?.tag1 || 'No Tag'}</p>
                            </div>
                            <div className="bg-[#1A1A1A90] rounded-full pl-2 pr-2 text-white font-sans italic text-[0.8em]">
                                <p>{projectTags?.tag2 || 'No Tag'}</p>
                            </div>
                        </div>
                        <p className="md:text-xl 3xs:text-md font-sans mt-2 mb-3 overflow-y-auto scroll-shadows">{description}</p>
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
                
                {/* Right Arrow */}
                <div className="3xs:absolute md:hidden h-full w-full">
                    <div className={`${project0Bool || project1Bool || project2Bool || project3Bool || project4Bool || project5Bool ? 'opacity-100':'opacity-0'} duration-3000 h-full w-full flex items-center justify-end`} style={{ position: "absolute", bottom: 0, right: 0, height: "100%", width: "20%", pointerEvents: "none"}}>
                        <svg className={`flex duration-1000 w-[35px] h-[35px] text-gray-800 animate-sideBounceRight`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                        </svg>
                    </div>
                </div>

                {/* Left Arrow */}
                <div className="3xs:absolute md:hidden h-full w-full">
                    <div className={`${project1Bool || project2Bool || project3Bool || project4Bool || project5Bool || project6Bool ? 'opacity-100':'opacity-0'} duration-3000 h-full w-full flex items-center justify-start`} style={{ position: "absolute", bottom: 0, left: 0, height: "100%", width: "20%", pointerEvents: "none"}}>
                        <svg className={`flex duration-1000 w-[35px] h-[35px] text-gray-800 animate-sideBounceLeft`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
                        </svg>
                    </div>
                </div>
            </div>

        </section>   
    );
}