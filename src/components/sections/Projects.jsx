import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = ({title, number, description, image, hrefFile, hrefDownloadName, hrefText, reverse = false, setNavTitle, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor}) => {

    const [learnMoreBool, setLearnMoreBool] = useState(false);

    const learnMoreShow = () => {
        console.log("Hovered!");
        setLearnMoreBool(true);
    }

    const learnMoreHide = () => {
        console.log("Unhovered!");
        setLearnMoreBool(false);
    }
    
    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitleColor("text-[#1A1A1A]");
            setNavBarColor("#F0F0F090"); // Fixed: lowercase 'f' in hex code
            setNavMainMenuBtnColor("bg-[#1A1A1A]");
            setNavSocialColor("filter invert");

            setNavTitle("03 Projects");
        }
    }, [inView, setNavTitle, hrefFile, hrefDownloadName, hrefText]);

    return (
        <section id="projects" ref={ref} className="relative h-lvh w-svw justify-center items-center bg-[#F0F0F0]">
            <div className={`h-full w-full flex 3xs:flex-col ${reverse ? 'lg:flex-row-reverse':'lg:flex-row'} justify-center items-center`}>
                <div className="sm:h-full 3xs:h-[50%] w-full flex  justify-center items-center p-3 mt-3" > 
                    <div className="h-full w-[90%] flex flex-col justify-center items-start">
                        <p className="lg:text-9xl 3xs:text-6xl font-sans font-bold">{number}</p>
                        <a href={`${hrefFile}`} download={`${hrefDownloadName}`} target="_blank" className="animate-pulse">
                            <p className="lg:text-6xl 3xs:text-2xl font-sans font-bold mt-5">{title}</p>
                        </a>
                        <p className="lg:text-xl 3xs:text-md font-sans mt-2 mb-3 overflow-y-auto">{description}</p>
                    </div>
                </div>
                
                <div id="image0" className="relative lg:flex h-full w-full 3xs:w-full lg:mask-radial-from-99% lg:mask-radial-[40%_40%] overflow-hidden " onMouseEnter={learnMoreShow} onMouseLeave={learnMoreHide}>
                    <div className={`absolute bg-fixed h-full w-full duration-500 bg-cover  scale-100 bg-no-repeat ${learnMoreBool? 'blur-xs':''}`} style={{ backgroundImage: `url(${image})`}} />
                    <a href={`${hrefFile}`} download={`${hrefDownloadName}`} target="_blank" >
                        <div className={`absolute cursor-pointer flex flex-col justify-center items-center h-full w-full bg-[#F0F0F0]/60 duration-500 3xs:opacity-100 ${learnMoreBool ? 'lg:opacity-100' : 'lg:opacity-0'}`}>
                            <p className="text-5xl font-bold pt-3 text-[#1A1A1A]">{hrefText}</p>
                            <p className="text-[0.7rem] italic pt-3 text-[#1A1A1A]">Image was generated from Meta AI</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>   
    );
}