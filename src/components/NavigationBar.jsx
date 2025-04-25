import socialMediaLogo from "../assets/socialMediaLogo.svg";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { LinkedIn, GitHubLight } from "developer-icons";

export const NavigationBar = ({
  setCurHamburgerStatus,
  overflowStatus,
  setOverflowStatus,
  navTitle,
  navTitleColor,
  navBarColor,
  navMainMenuBtnColor,
  navSocialColor,
}) => {
  const [socialShowBool, setSocialShowBool] = useState(false);

  function handleHamburgerClick() {
    setCurHamburgerStatus(true);
    // Enable Scrolling
    if (overflowStatus === true) {
      setOverflowStatus(false);
      document.body.style.overflow = "hidden";
    }
  }

  function handleSocialButtonClick() {
    setSocialShowBool(!socialShowBool);
  }

  useEffect(() => {});

  return (
    <nav
      className="fixed top-0 z-40 w-dvw md:h-[6rem] xs:h-[4rem] 3xs:h-[4rem] flex flex-row items-center duration-1000"
      style={{ backgroundColor: navBarColor }}
    >
      <div className="absolute h-full w-full backdrop-blur-lg opacity-90" />
      <div
        className="relative h-full w-xs flex flex-row space-x-1.5 justify-center items-center"
        id="hamburgerPartition"
      >
        <div
          className="transform transition-transform duration-200 hover:scale-125 flex flex-row space-x-1.5 cursor-pointer"
          id="hamburgerBtn"
          onClick={handleHamburgerClick}
        >
          <div
            className={`w-[0.3rem] h-[2rem] ${navMainMenuBtnColor} duration-500`}
          />
          <div
            className={`w-[0.3rem] h-[2rem] ${navMainMenuBtnColor} duration-500`}
          />
          <div
            className={`w-[0.3rem] h-[2rem] ${navMainMenuBtnColor} duration-500`}
          />
        </div>
      </div>
      <div className="relative h-full w-full" id="titlePartition">
        <div
          className={`h-full w-full flex flex-row items-center md:justify-start 3xs:justify-center md:text-4xl sm:text-3xl 3xs:text-lg font-bold ${navTitleColor} duration-500 text-center font-sans`}
        >
          <TypeAnimation
            key={navTitle}
            sequence={[navTitle, 10]}
            speed={5}
            cursor={false}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="relative h-full w-xs" id="socialMediaPartition">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div
            className={`duration-500 ${navSocialColor}`}
            onClick={handleSocialButtonClick}
          >
            <img
              src={socialMediaLogo}
              alt="Social Media Logo"
              width="50"
              height="50"
              className="cursor-pointer transform transition-transform duration-500 hover:scale-125 "
            />
          </div>
          <div
            className={`absolute top-[100%] flex flex-col justify-center items-center h-30 duration-500 ${socialShowBool ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <a
              href="https://www.linkedin.com/in/mauries-lopez/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="size-10 mb-3 hover:scale-120 duration-300 cursor-pointer" />
            </a>
            <a
              href="https://github.com/mauries-lopez"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLight
                className={`${navSocialColor} size-10 hover:scale-120 duration-300 cursor-pointer`}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
