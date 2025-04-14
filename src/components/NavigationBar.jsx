import socialMediaLogo from '../assets/socialMediaLogo.svg'

export const NavigationBar = ({ curHamburgerStatus, setCurHamburgerStatus}) => {
    
    function handleHamburgerClick(){
        setCurHamburgerStatus(true);
    }
    
    return (
        <nav className="absolute w-dvw h-[6rem] background-color: bg-black opacity-90 flex flex-row items-center">
            <div className="relative h-full w-xs flex flex-row space-x-1.5 justify-center items-center" id="hamburgerPartition" >
                <div className="transform transition-transform duration-200 hover:scale-125 flex flex-row space-x-1.5 cursor-pointer" id="hamburgerBtn" onClick={handleHamburgerClick}>
                    <div className="w-[0.3rem] h-[2rem] bg-white duration-300"></div>
                    <div className="w-[0.3rem] h-[2rem] bg-white duration-300"></div>
                    <div className="w-[0.34rem] h-[2rem] bg-white duration-300"></div>
                </div>
            </div>
            <div className="relative h-full w-full" id="titlePartition">
                <div className="h-full w-full flex flex-row items-center justify-center text-3xl font-bold text-white text-center">
                    <span > Mauries Lopez </span>
                </div>
            </div>
            <div className="relative h-full w-xs" id="socialMediaPartition">
                <div className="h-full w-full flex flex-row items-center justify-center ">
                    <img src={socialMediaLogo} alt="Social Media Logo" width="50" className="cursor-pointer transform transition-transform duration-200 hover:scale-125"/>
                </div>
            </div>
        </nav>
    );
}