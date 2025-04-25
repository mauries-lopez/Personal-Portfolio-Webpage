import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";

import "./Experience.css";

export const Experience = ({
  id,
  title,
  hrefLink,
  location,
  year,
  keyResponsibilities,
  blockBool,
  setBlockBool,
  blockShadow,
  setBlockShadow,
  blockFocus,
  setBlockFocus,
  blockIconActive,
  setBlockIconActive,
  blockRef = {},
  blockInView = {},
  blockShadowRef = {},
  blockShadowInView = {},
  setNavTitle,
  setAnimateAboutBGClass,
  setNavTitleColor,
  setNavBarColor,
  setNavMainMenuBtnColor,
  setNavSocialColor,
}) => {
  // Refs for section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.5,
  });

  /*
  // Combination of both references
  const setBlock0Refs = (node) => {
    block0Ref(node);
    block0ShadowRef(node);
  };
  const setBlock1Refs = (node) => {
    block1Ref(node);
    block1ShadowRef(node);
  };
  const setBlock2Refs = (node) => {
    block2Ref(node);
    block2ShadowRef(node);
  };
  */

  const setBlockRefs = useCallback(
    (node) => {
      sectionRef(node);
      blockRef.current = node;
      blockShadowRef.current = node;
    }
  );

  // Section-level styles and effects
  useEffect(() => {
    if (sectionInView) {
      setNavTitleColor("text-[#F0F0F0]");
      setNavBarColor("#1A1A1A");
      setNavMainMenuBtnColor("bg-white");
      setNavSocialColor("");

      setNavTitle("02 Experience");
      setAnimateAboutBGClass("animate-scale-out-bg");
    }
  }, [
    sectionInView,
    setAnimateAboutBGClass,
    setNavBarColor,
    setNavMainMenuBtnColor,
    setNavSocialColor,
    setNavTitle,
    setNavTitleColor,
  ]);

  // For slide-in and slide-out of components each block
  useEffect(() => {
    if ( sectionInView && blockInView && !blockBool) {
      setBlockIconActive(true);
      setBlockBool(true);
    }
  }, [
    blockInView,
    blockBool,
  ]);

  // For focus block (white shadow) animation
  useEffect(() => {
    // Reset others shadow
    setBlockFocus("opacity-10");
    setBlockShadow("opacity-0");

    if ( sectionInView && blockShadowInView && blockBool) {
      // Show this one and focus
      setBlockFocus("opacity-100");
      setBlockShadow("opacity-100");
    }
  }, [
    blockShadowInView,
    blockBool,
  ]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative w-dvw flex justify-center items-center bg-[#1A1A1A]"
    >
      <div
        className="absolute h-full w-full blur-[3px] 3xs:bg-local sm:bg-fixed bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/mainMenuBG_Invert_minimal.png)" }}
      />
      {/* <div className="fixed bg-white/50 top-1/2 left-0 w-full h-1 pointer-events-none z-10" /> to view the center of the screen */}
      <div className="relative h-full w-full flex flex-col">
        <div
          ref={setBlockRefs}
          className={`relative h-full w-full flex flex-row justify-center items-center duration-1000 ${blockFocus}`}
        >
          <div
            className={`absolute h-full w-full duration-2000 ${blockBool ? "opacity-0" : "opacity-100"}`}
          >
            <div
              className="flex size-full animate-pulse items-center justify-center"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.2), transparent)",
                pointerEvents: "none",
              }}
            >
              <svg
                className="w-50 h-50 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={`${blockIconActive ? "currentColor" : "none"}`}
                viewBox="0 0 24 24"
              >
                {blockIconActive ? (
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                )}
              </svg>
            </div>
          </div>
          <div className="relative h-full w-full flex flex-col justify-center text-[#F0F0F0] ">
            <div
              id="block-0"
              className={`m-10  ${blockBool ? "animate-block-slide-out opacity-100" : "animate-block-slide-in opacity-0"}`}
            >
              <p className="md:text-6xl sm:text-4xl 3xs:text-2xl font-sans font-bold ">
                {title}
              </p>
              <a
                href={hrefLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="md:text-2xl sm:text-xl 3xs:text-lg font-sans italic animate-pulse pt-3">
                  {location}
                </p>
              </a>
              <p className="md:text-xl sm:text-lg 3xs:text-sm font-sans italic pt-2">
                {year}
              </p>
              <p className="md:text-xl sm:text-lg 3xs:text-sm font-bold font-sans italic mt-4">
                Key responsibilities
              </p>
              <ul className=" md:text-xl sm:text-lg 3xs:text-sm font-sans italic pl-5 list-disc">
                <li>
                  {keyResponsibilities?.key0 || "Missing..."}
                </li>
                <li>
                  {keyResponsibilities?.key1 || "Missing..."}
                </li>
                <li>
                  {keyResponsibilities?.key2 || "Missing..."}
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-full w-[50%] lg:flex justify-end m-10 font-sans font-bold text-[#F0F0F0] 3xs:hidden ">
            <p
              className={`text-8xl ${blockBool ? "animate-block-slide-out opacity-100" : "animate-block-slide-in opacity-0"}`}
            >
              { id === 'experience-1' ? (
                <>
                  <span className="text-8xl">2024</span>
                  <span className="text-8xl flex items-center justify-center">&uarr;</span>
                  <span className="text-8xl">2021</span>
                </>
              ) : (
                <span>{year}</span>
              )}
            </p>
          </div>
          <div
            ref={blockShadowRef}
            className={`${blockShadow} duration-500`}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "100%",
              background: "linear-gradient(rgba(255,255,255,0.2), transparent)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
};