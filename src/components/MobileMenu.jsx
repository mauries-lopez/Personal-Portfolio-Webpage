import { useState } from "react";
import { Link } from "react-scroll";

import "./MobileMenu.css";

export const MobileMenu = ({
  setCurHamburgerStatus,
  overflowStatus,
  setOverflowStatus,
}) => {
  const [animateClass, setAnimateClass] = useState("animate-div-slide-out");
  const [animateBlurryDivClass, setAnimateBlurryDiv] = useState(
    "animate-blurry-div-fade-in",
  );

  function handleHamburgerClick() {
    setAnimateClass("animate-div-slide-in");
    setAnimateBlurryDiv("animate-blurry-div-fade-out");

    // Enable Scrolling
    if (overflowStatus === false) {
      setOverflowStatus(true);
      document.body.style.overflowY = "scroll";
    }

    setTimeout(() => {
      setCurHamburgerStatus(false);
    }, 750);
  }

  return (
    <div className="fixed top-0 left-0 z-50 h-dvh w-dvw flex flex-row">
      <div
        id="mainMenu"
        className={`relative h-dvh z-20 3xs:w-[100%] md:w-[50%] bg-white text-black/95 flex flex-col ${animateClass} bg-no-repeat bg-cover bg-center`}
        onWheel={handleHamburgerClick}
      >
        <div
          className="absolute h-full w-full blur-[2px] bg-black"
          style={{ backgroundImage: "url(/mainMenuBG.png" }}
        />
        <div
          id="upperPortion"
          className="relative h-[20%] w-full flex flex-row justify-start items-center transform transition-transform duration-500 ease-in-out translate-x-0"
        >
          <div
            className="relative left-[4rem] transform transition-transform duration-200 hover:scale-125 flex flex-row space-x-1.5 cursor-pointer"
            id="hamburgerBtn"
            onClick={handleHamburgerClick}
          >
            <span className="text-5xl"> X </span>
          </div>
        </div>
        <div
          id="middlePortion"
          className="relative h-[60%] w-full flex justify-center items-start"
        >
          <div>
            <ul className="list-inside list-[upper-roman] text-3xl/17 font-bold">
              <Link
                to="about"
                spy
                smooth
                offset={0}
                duration={800}
                onClick={() => {
                  handleHamburgerClick();
                }}
              >
                <li className="hover:underline cursor-pointer"> About Me </li>
              </Link>

              <Link
                to="experience-0"
                spy
                smooth
                offset={window.innerWidth < 640 ? -50 : -80}
                duration={800}
                onClick={() => {
                  handleHamburgerClick();
                }}
              >
                <li className="hover:underline cursor-pointer"> Experience </li>
              </Link>

              <Link
                to="project0"
                spy
                smooth
                offset={window.innerWidth < 640 ? -30 : 0}
                duration={800}
                onClick={() => {
                  handleHamburgerClick();
                }}
              >
                <li className="hover:underline cursor-pointer"> Projects </li>
              </Link>

              <Link
                to="contact"
                spy
                smooth
                offset={0}
                duration={800}
                onClick={() => {
                  handleHamburgerClick();
                }}
              >
                <li className="hover:underline cursor-pointer"> Contact </li>
              </Link>
            </ul>
          </div>
        </div>
        <div id="lowerPortion" className="relative h-[20%] w-full " />
      </div>
      <div
        id="blurrySide"
        className={`hidden fixed z-10 md:block h-dvh bg-black/100 md:w-[100%] ${animateBlurryDivClass}`}
        onClick={handleHamburgerClick}
        onWheel={handleHamburgerClick}
      />
    </div>
  );
};
