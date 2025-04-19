import socialMediaLogo from '../assets/socialMediaLogo.svg'

export const NavigationBar = ({ setCurHamburgerStatus, overflowStatus, setOverflowStatus, navTitle, navTitleColor, navBarColor, navMainMenuBtnColor, navSocialColor}) => {
    
    function handleHamburgerClick(){
        setCurHamburgerStatus(true);
        // Enable Scrolling
        if ( overflowStatus == true ){
            setOverflowStatus(false);
            document.body.style.overflow = "hidden";
        }
    }
    
    return (
        <nav className="fixed top-0 z-40 w-dvw md:h-[6rem] xs:h-[4rem] 3xs:h-[4rem] flex flex-row items-center duration-1000" style={{backgroundColor: navBarColor}}>
            <div className="relative h-full w-xs flex flex-row space-x-1.5 justify-center items-center" id="hamburgerPartition" >
                <div className="transform transition-transform duration-200 hover:scale-125 flex flex-row space-x-1.5 cursor-pointer" id="hamburgerBtn" onClick={handleHamburgerClick}>
                    <div className={`w-[0.3rem] h-[2rem] ${navMainMenuBtnColor} duration-500`}></div>
                    <div className={`w-[0.3rem] h-[2rem] ${navMainMenuBtnColor} duration-500`}></div>
                    <div className={`w-[0.3rem] h-[2rem] ${navMainMenuBtnColor} duration-500`}></div>
                </div>
            </div>
            <div className="relative h-full w-full" id="titlePartition">
                <div className={`h-full w-full flex flex-row items-center md:justify-start 3xs:justify-center md:text-4xl sm:text-3xl 3xs:text-lg font-bold ${navTitleColor} duration-500 text-center`}>
                    <span > {navTitle} </span>
                </div>
            </div>
            <div className="relative h-full w-xs" id="socialMediaPartition">
                <div className="h-full w-full flex flex-row items-center justify-center ">
                    <img src={socialMediaLogo} alt="Social Media Logo" width="50" height="50" className={`cursor-pointer transform transition-transform duration-200 hover:scale-125 ${navSocialColor} duration-500`}/>
                </div>
            </div>
        </nav>
    );
}