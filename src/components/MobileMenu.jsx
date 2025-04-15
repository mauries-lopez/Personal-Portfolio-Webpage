import { useState } from "react";

export const MobileMenu = ({curHamburgerStatus, setCurHamburgerStatus}) => {

    const [animateClass, setAnimateClass] = useState("animate-div-slide-out");
    const [animateBlurryDivClass, setAnimateBlurryDiv] = useState("animate-blurryDiv-fade-in");

    function handleHamburgerClick() {
        setAnimateClass("animate-div-slide-in"); 
        setAnimateBlurryDiv("animate-blurryDiv-fade-out");
        setTimeout(() => {
            setCurHamburgerStatus(false);
        }, 750);
    }

    return (
        <div className="absolute top-0 left-0 z-50 h-dvh w-dvw flex flex-row">
            <div id="mainMenu" className={`relative h-dvh 3xs:w-[100%] md:w-[50%] bg-white text-black flex flex-col ${animateClass} bg-no-repeat bg-cover bg-center`} style={{backgroundImage: "url(/mainMenuBG.png"}}>
                <div id="upperPortion" className="relative h-[20%] w-full flex flex-row justify-start items-center transform transition-transform duration-500 ease-in-out translate-x-0">
                    <div className="relative left-[4rem] transform transition-transform duration-200 hover:scale-125 flex flex-row space-x-1.5 cursor-pointer" id="hamburgerBtn" onClick={handleHamburgerClick}>
                        <span className="text-5xl"> X </span>
                    </div>
                </div>
                <div id="middlePortion" className="relative h-[60%] w-full flex justify-center items-start">
                    <div>
                        <ul class="list-inside list-[upper-roman] text-3xl/17 font-bold">
                            <li className="hover:underline cursor-pointer"> About Me </li>
                            <li className="hover:underline cursor-pointer"> Projects </li>
                            <li className="hover:underline cursor-pointer"> Tech Stack </li>
                            <li className="hover:underline cursor-pointer"> Education </li>
                            <li className="hover:underline cursor-pointer"> Experience </li>
                            <li className="hover:underline cursor-pointer"> Contact </li>
                        </ul>
                    </div>
                </div>
                <div id="lowerPortion" className="relative h-[20%] w-full ">

                </div>
            </div>
            <div id="blurrySide" className={`hidden md:block relative h-dvh bg-black opacity-50 md:w-[50%] ${animateBlurryDivClass}`}>

            </div>
        </div>
        
    );
}