import socialMediaLogo from '../assets/socialMediaLogo.svg'

export const NavigationBar = ({ curHamburgerStatus, setCurHamburgerStatus, overflowStatus, setOverflowStatus, navTitle}) => {
    
    function handleHamburgerClick(){
        setCurHamburgerStatus(true);
        // Enable Scrolling
        if ( overflowStatus == true ){
            setOverflowStatus(false);
            document.body.style.overflow = "hidden";
        }
    }
    
    return (
        <nav className="fixed top-0 z-40 w-dvw h-[6rem] flex flex-row items-center" style={{backgroundColor: "#1A1A1A"}}>
            <div className="relative h-full w-xs flex flex-row space-x-1.5 justify-center items-center" id="hamburgerPartition" >
                <div className="transform transition-transform duration-200 hover:scale-125 flex flex-row space-x-1.5 cursor-pointer" id="hamburgerBtn" onClick={handleHamburgerClick}>
                    <div className="w-[0.3rem] h-[2rem] bg-white duration-300"></div>
                    <div className="w-[0.3rem] h-[2rem] bg-white duration-300"></div>
                    <div className="w-[0.3rem] h-[2rem] bg-white duration-300"></div>
                </div>
            </div>
            <div className="relative h-full w-full" id="titlePartition">
                <div className="h-full w-full flex flex-row items-center justify-start md:text-4xl sm:text-3xl 3xs:text-2xl font-bold text-white text-center">
                    <span > {navTitle} </span>
                </div>
            </div>
            <div className="relative h-full w-xs" id="socialMediaPartition">
                <div className="h-full w-full flex flex-row items-center justify-center ">
                    <img src={socialMediaLogo} alt="Social Media Logo" width="50" height="50" className="cursor-pointer transform transition-transform duration-200 hover:scale-125"/>
                </div>
            </div>
        </nav>
    );
}