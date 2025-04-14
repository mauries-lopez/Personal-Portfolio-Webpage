
export const MobileMenu = ({curHamburgerStatus, setCurHamburgerStatus}) => {

    function handleHamburgerClick(){
        setCurHamburgerStatus(false);
    }

    return (
        <div className="absolute h-dvh sm:w-[100%] md:w-[50%] bg-blue-700 text-white flex flex-col">
            <div id="upperPortion" className="relative h-[20%] w-full flex flex-row justify-start items-center transform transition-transform duration-500 ease-in-out translate-x-0">
                <div className="relative left-[4rem] transform transition-transform duration-200 hover:scale-125 flex flex-row space-x-1.5 cursor-pointer" id="hamburgerBtn" onClick={handleHamburgerClick}>
                    <div className="w-[0.3rem] h-[2rem] bg-white duration-300"></div>
                    <div className="w-[0.3rem] h-[2rem] bg-white duration-300"></div>
                    <div className="w-[0.34rem] h-[2rem] bg-white duration-300"></div>
                </div>
            </div>
            <div id="middlePortion" className="relative h-[60%] w-full bg-red-500">

            </div>
            <div id="lowerPortion" className="relative h-[20%] w-full bg-blue-600">

            </div>
        </div>
    );
}