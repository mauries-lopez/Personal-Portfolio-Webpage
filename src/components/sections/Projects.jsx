import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import StackIcon from "tech-stack-icons";

export const Projects = ({title, number, description, image, reverse = false, setNavTitle, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor}) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    });

    useEffect(() => {
        if (inView) {
            setNavTitleColor("text-[#1A1A1A]");
            setNavBarColor("#F0F0F0"); // Fixed: lowercase 'f' in hex code
            setNavMainMenuBtnColor("bg-[#1A1A1A]");
            setNavSocialColor("filter invert");

            setNavTitle("03 Projects");
        }
    }, [inView, setNavTitle]);
    
    return (
        <section id="projects" ref={ref} className="relative h-lvh w-svw justify-center items-center bg-[#F0F0F0]">
            <div className={`h-full w-full flex 3xs:flex-col ${reverse ? 'lg:flex-row-reverse':'lg:flex-row'} justify-center items-center`}>
                {/*First Project*/}
                <div className="sm:h-full 3xs:h-[50%] w-full flex justify-center items-center p-3 mt-3" > 
                    <div className="h-full w-[90%] flex flex-col justify-center items-start">
                        <p className="lg:text-9xl 3xs:text-6xl font-sans font-bold">{number}</p>
                        <p className="lg:text-6xl 3xs:text-2xl font-sans font-bold mt-5">{title}</p>
                        <p className="lg:text-xl 3xs:text-md font-sans mt-2 mb-3 overflow-y-auto">{description}</p>
                    </div>
                </div>
                <div id="image0" className="relative lg:flex h-full w-full 3xs:w-full lg:mask-radial-from-99% lg:mask-radial-[40%_40%] lg:blur-xs bg-fixed" style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>
        </section>   
    );
}