import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = ({title, number, description, image, reverse = false, setNavTitle, setAnimateAboutBGClass, setNavTitleColor, setNavBarColor, setNavMainMenuBtnColor, setNavSocialColor}) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
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
        <section id="projects" ref={ref} className="relative h-svh w-dvw justify-center items-center bg-[#F0F0F0]">
            <div className={`h-full w-full flex 3xs:flex-col ${reverse ? 'lg:flex-row-reverse':'lg:flex-row'} justify-center items-center`}>
                {/*First Project*/}
                <div className="h-full w-full flex justify-center items-center" > 
                    <div className="w-[90%] flex flex-col justify-start">
                        <p className="lg:text-9xl 3xs:text-6xl font-sans font-bold">{number}</p>
                        <p className="lg:text-6xl 3xs:text-2xl font-sans font-bold mt-5">{title}</p>
                        <p className="lg:text-2xl 3xs:text-lg font-sans mt-5">{description}</p>
                    </div>
                </div>
                <div id="image0" className="relative h-full w-full mask-radial-from-99% mask-radial-[40%_40%] blur-xs bg-fixed" style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>
        </section>   
    );
}