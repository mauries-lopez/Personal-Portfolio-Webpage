import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import { C, CPlusPlus, CSharp, Java, Markdown, CSS, TailwindCSS } from "developer-icons";

export const About = ({
  setNavTitle,
  setAnimateAboutBGClass,
  setNavTitleColor,
  setNavBarColor,
  setNavMainMenuBtnColor,
  setNavSocialColor,
}) => {
  const [introductionDivName, setIntroductionDivName] = useState("+ Introduction");
  const [introductionDivBtnDisplay, setIntroductionDivBtnDisplay] = useState("block");
  const [introductionDisplay, setIntroductionDisplay] = useState("hidden");

  const [researchInterestDivName, setResearchInterestDivName] = useState("+ Research Interest",);
  const [researchInterestDivBtnDisplay, setResearchInterestDivBtnDisplay] = useState("block");
  const [researchInterestDisplay, setResearchInterestDisplay] =useState("hidden");

  const [educationDivName, setEducationDivName] = useState("+ Education");
  const [educationDivBtnDisplay, setEducationDivBtnDisplay] = useState("block");
  const [educationDisplay, setEducationDisplay] = useState("hidden");

  const [techStackDivName, setTechStackDivName] = useState("+ Tech Stack");
  const [techStackDivBtnDisplay, setTechStackDivBtnDisplay] = useState("block");
  const [techStackDisplay, setTechStackDisplay] = useState("hidden");

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      // Recolor (default)
      setNavTitleColor("text-[#1A1A1A]");
      setNavBarColor("#F0F0F000");
      setNavMainMenuBtnColor("bg-[#1A1A1A]");
      setNavSocialColor("filter invert");

      setNavTitle("01 About Me");
      setTimeout(() => {
        setAnimateAboutBGClass("animate-scale-in-bg");
      }, 30);
    }
  }, [
    inView,
    setNavTitle,
    setAnimateAboutBGClass,
    setNavBarColor,
    setNavMainMenuBtnColor,
    setNavSocialColor,
    setNavTitleColor,
  ]);

  function introductionClick() {
    if (introductionDisplay === "hidden") {
      // Force hide all info
      setResearchInterestDivBtnDisplay("hidden");
      setResearchInterestDisplay("hidden");
      setEducationDivBtnDisplay("hidden");
      setEducationDisplay("hidden");
      setTechStackDivBtnDisplay("hidden");
      setTechStackDisplay("hidden");

      setIntroductionDisplay("block");
      setIntroductionDivName("− Introduction");
    } else {
      setIntroductionDisplay("hidden");
      setIntroductionDivName("+ Introduction");

      // Show buttons
      setResearchInterestDivBtnDisplay("block");
      setEducationDivBtnDisplay("block");
      setTechStackDivBtnDisplay("block");
    }
  }

  function researchInterestClick() {
    if (researchInterestDisplay === "hidden") {
      setEducationDivBtnDisplay("hidden");
      setEducationDisplay("hidden");
      setIntroductionDivBtnDisplay("hidden");
      setIntroductionDisplay("hidden");
      setTechStackDivBtnDisplay("hidden");
      setTechStackDisplay("hidden");

      setResearchInterestDisplay("block");
      setResearchInterestDivName("− Research Interest");
    } else {
      setResearchInterestDisplay("hidden");
      setResearchInterestDivName("+ Research Interest");

      setEducationDivBtnDisplay("block");
      setIntroductionDivBtnDisplay("block");
      setTechStackDivBtnDisplay("block");
    }
  }

  function educationDisplayClick() {
    if (educationDisplay === "hidden") {
      setIntroductionDivBtnDisplay("hidden");
      setIntroductionDisplay("hidden");
      setResearchInterestDivBtnDisplay("hidden");
      setResearchInterestDisplay("hidden");
      setTechStackDivBtnDisplay("hidden");
      setTechStackDisplay("hidden");

      setEducationDisplay("block");
      setEducationDivName("− Education");
    } else {
      setEducationDisplay("hidden");
      setEducationDivName("+ Education");

      setIntroductionDivBtnDisplay("block");
      setResearchInterestDivBtnDisplay("block");
      setTechStackDivBtnDisplay("block");
    }
  }

  function techStackDisplayClick() {
    if (techStackDisplay === "hidden") {
      setIntroductionDivBtnDisplay("hidden");
      setIntroductionDisplay("hidden");
      setResearchInterestDivBtnDisplay("hidden");
      setResearchInterestDisplay("hidden");
      setEducationDivBtnDisplay("hidden");
      setEducationDisplay("hidden")

      setTechStackDisplay("block");
      setTechStackDivName("- Skills / Tech Stack");
    } else {
      setTechStackDisplay("hidden");
      setTechStackDivName("+ Skills / Tech Stack");

      setIntroductionDivBtnDisplay("block");
      setResearchInterestDivBtnDisplay("block");
      setEducationDivBtnDisplay("block");
    }
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative h-svh w-svw top-0 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="fixed inset-0 bg-cover bg-fixed bg-center blur-[3px] z-0 scale-[1.1] bg ">
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(to top, rgba(26,26,26, 1), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>
      <div className="relative sm:w-[50%] 3xs:w-[80%] md:w-[70%] flex flex-col justify-center items-center">
        <div className="relative w-full flex 3xs:flex-col md:flex-row-reverse justify-center items-center ">
          <div
            id="imageDiv"
            className="relative xl:h-[420px] xl:w-[500px] lg:h-[340px] lg:w-[400px] md:h-[260px] md:w-[300px] sm:h-[200px] sm:w-[250px] 3xs:h-[200px] 3xs:w-[230px] flex flex-col 3xs:pb-5 justify-center items-center bg-fixed"
          >
            <div
              className="relative xl:h-[420px] xl:w-[500px] lg:h-[340px] lg:w-[400px] md:h-[260px] md:w-[300px] sm:h-[200px] sm:w-[250px] 3xs:h-[200px] 3xs:w-[230px] bg-no-repeat bg-cover bg-bottom mask-radial-from-99% mask-radial-[40%_50%] "
              style={{ backgroundImage: "url(/profilePictureWbg.jpg" }}
            />
          </div>
          <div className="relative w-full md:pt-0 flex flex-col justify-center items-center  bg-[#1A1A1A]/80 rounded-2xl">
            <div
              id="nameDiv"
              className="relative md:p-5 3xs:p-2 text-[#F0F0F0] md:text-5xl 3xs:text-4xl font-bold font-sans text-center break-words flex justify-center items-center pointer-events-none"
            >
              <TypeAnimation
                sequence={["Mauries Lopez", 1000]}
                speed={350}
                cursor={false}
                repeat={Infinity}
              />
            </div>
            <div className="relative w-full flex flex-col justify-start md:overflow-hidden rounded-2xl bg-[#1A1A1A]/50 ">
              <div
                id="subNameDiv"
                className={`relative ${introductionDivBtnDisplay} bg-[#F0F0F0] text-[#1A1A1A] md:text-2xl 3xs:text-xl italic font-bold font-sans text-start break-words p-3 cursor-pointer duration-500 hover:bg-white/80`}
                onClick={introductionClick}
              >
                {introductionDivName}
              </div>
              <div id="introDiv" className={`${introductionDisplay}`}>
                <div className="m-3">
                  <div
                    id="subNameDiv"
                    className="relative text-[#F0F0F0] md:text-2xl 3xs:text-lg italic font-bold font-sans text-start break-words "
                  >
                    B.S. Computer Science Student
                  </div>
                  <div
                    id="subSchoolNameDiv"
                    className="relative  text-[#F0F0F0] md:text-xl 3xs:text-md italic font-bold font-sans text-start break-words "
                  >
                    De La Salle University
                  </div>
                  <div
                    id="shortIntroDiv"
                    className="relative text-[#F0F0F0] md:text-xl 3xs:text-md font-sans text-justify break-words pt-3"
                  >
                    My passion for coding and curiosity have led me to work on
                    diverse projects, as I continuously seek opportunities to
                    learn and grow. I thrive on challenges that push me to expand
                    my skills and think creatively.
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  id="subNameDiv"
                  className={`relative ${researchInterestDivBtnDisplay} bg-[#F0F0F0] text-[#1A1A1A] md:text-2xl 3xs:text-xl italic font-bold font-sans text-start break-words p-3 cursor-pointer duration-500 hover:bg-white/80`}
                  onClick={researchInterestClick}
                >
                  {researchInterestDivName}
                </div>
                <div
                  id="researchInterestContentDiv"
                  className={`${researchInterestDisplay}`}
                >
                  <div className="text-[#F0F0F0] md:text-xl 3xs:text-md font-sans break-words m-3">
                    <ul className="list-inside list-decimal">
                      <li> Deep Learning </li>
                      <li> Sentiment Analysis </li>
                      <li> Natural Language Processing </li>
                      <li> Neural Networks (Encoders) </li>
                    </ul>
                    <div className="text-[#F0F0F0] font-sans pt-3 text-justify italic">
                      Currently working on a thesis about "Exploring
                      Transformer-based Approaches in Sentiment Prediction of
                      Philippine Tweets."
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  id="subNameDiv"
                  className={`relative ${educationDivBtnDisplay} bg-[#F0F0F0] text-[#1A1A1A] md:text-2xl 3xs:text-xl italic font-bold font-sans text-start break-words p-3 cursor-pointer duration-500 hover:bg-white/80`}
                  onClick={educationDisplayClick}
                >
                  {educationDivName}
                </div>
                <div id="educationContentDiv" className={`${educationDisplay}`}>
                  <div className="text-[#F0F0F0] md:text-xl 3xs:text-md font-sans break-words m-3">
                    <div className="text-[#F0F0F0] font-sans text-justify">
                      <p className="font-bold">De La Salle University</p>
                      <p className="italic text-sm"> 2021-2025</p>
                      <p>
                        Bachelor of Science in Computer Science Major in Software
                        Technology
                      </p>
                    </div>
                    <hr className="mt-3" />
                    <div className="text-[#F0F0F0] font-sans pt-3 text-justify">
                      <p className="font-bold">Mapúa Malayan Colleges Laguna</p>
                      <p className="italic text-sm">
                        2019-2021 (Senior Highschool)
                      </p>
                      <p>
                        Science, Technology, Engineering, and Mathematics Track
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  id="subNameDiv"
                  className={`relative ${techStackDivBtnDisplay} bg-[#F0F0F0] text-[#1A1A1A] md:text-2xl 3xs:text-xl italic font-bold font-sans text-start break-words p-3 cursor-pointer duration-500 hover:bg-white/80`}
                  onClick={techStackDisplayClick}
                >
                  {techStackDivName}
                </div>
                <div id="techStackContentDiv" className={`${techStackDisplay}`}>
                  <div className="text-[#F0F0F0] md:text-xl 3xs:text-md font-sans break-words m-3">
                    <div className="text-[#F0F0F0] font-sans text-justify">
                      <p className="font-bold">Natural Language</p>
                      <p>
                        Tagalog (Native); English (Proficient)
                      </p>
                      <hr className="mt-2" />
                      <p className="font-bold pt-1">Programming Language</p>
                      <div className="flex flex-row space-x-2 pt-1">
                        <C className="size-6"/>
                        <CPlusPlus className="size-6"/>
                        <CSharp className="size-6"/>
                        <Java className="size-6"/>
                      </div>
                      <hr className="mt-2" />
                      <p className="font-bold pt-1 pb-1">Typesetting Language</p>
                      <Markdown className="size-6 invert"/>
                      <hr className="mt-2" />
                      <p className="font-bold pt-1">Stylesheet</p>
                      <div className="flex flex-row space-x-2 pt-1">
                        <CSS className="size-6"/>
                        <TailwindCSS className="size-6"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="arrowDownDiv"
          className="relative transform z-20 h-[10%] w-[10%] flex justify-center items-center animate-pulse 3xs:pt-15 sm:pt-20"
        >
          <Link
            to="experience-0"
            spy
            smooth
            offset={window.innerWidth < 640 ? -50 : -80}
            duration={500}
          >
            <div className="flex md:size-12 3xs:size-14 sm:animate-bounce 3xs:animate-pulse 3xs:mb-5 items-center justify-center rounded-full md:bg-black p-2 ring-1 md:ring-gray-900/100 dark:bg-white/30 dark:ring-white/100 cursor-pointer">
              <svg
                className="size-12 text-[#F0F0F0]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
