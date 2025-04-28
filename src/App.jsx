import "./index.css";
import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavigationBar } from "./components/NavigationBar";
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from './components/sections/Contact'
import Lenis from "lenis";
import { GitHubLight } from "developer-icons";
import { useInView } from "react-intersection-observer";

function App() {
  // Hamburger Button / Main Menu
  const [isLoaded, setIsLoaded] = useState(false);
  const [curHamburgerStatus, setCurHamburgerStatus] = useState(false);
  const [overflowStatus, setOverflowStatus] = useState(true); // True = With Scrolling; False = No Scrolling

  // Navigation Bar
  const [navTitle, setNavTitle] = useState("Section Title");
  const [navTitleColor, setNavTitleColor] = useState("text-white");
  const [navBarColor, setNavBarColor] = useState("#1A1A1A");
  const [navMainMenuBtnColor, setNavMainMenuBtnColor] = useState("bg-[#F0F0F0]");
  const [navSocialColor, setNavSocialColor] = useState("");

  // List of Key Responbilities per experience
  const keyResponsibilities = [
    {
      key0: "Improve the chatbot dialogues and conversation flow",
      key1: "Perform stress testing, identify bugs, and implement fixes",
      key2: "Improve the web application for mobile compatibility"
    },
    {
      key0: "Project head activities",
      key1: "Supervise promotional material production",
      key2: "Execute marketing strategies"
    },
    {
      key0: "Rebrand social media design",
      key1: "Design publication templates",
      key2: "Supervise production of promo materials"  
    },
  ];

  // Booleans for triggering animation per block
  const [block0Bool, setBlock0Bool] = useState(false);
  const [block1Bool, setBlock1Bool] = useState(false);
  const [block2Bool, setBlock2Bool] = useState(false);
  
  // Booleans for inner white shadow animation per block
  const [block0Shadow, setBlock0Shadow] = useState("opacity-0");
  const [block1Shadow, setBlock1Shadow] = useState("opacity-0");
  const [block2Shadow, setBlock2Shadow] = useState("opacity-0");

  // Booleans for focus reading animation per block
  const [block0Focus, setBlock0Focus] = useState("opacity-100");
  const [block1Focus, setBlock1Focus] = useState("opacity-100");
  const [block2Focus, setBlock2Focus] = useState("opacity-100");

  // States for icon change during first triggered animation per block
  // Default:  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  // Checked:  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
  const [block0IconActive, setBlock0IconActive] = useState(false);
  const [block1IconActive, setBlock1IconActive] = useState(false);
  const [block2IconActive, setBlock2IconActive] = useState(false);

  // Experience Section Variables
  const { ref: block0Ref, inView: block0InView } = useInView({
    threshold: 0.9,
  });
  const { ref: block1Ref, inView: block1InView } = useInView({
    threshold: 0.9,
  });
  const { ref: block2Ref, inView: block2InView } = useInView({
    threshold: 0.9,
  });

  // Refs for each block: white shadow
  const { ref: block0ShadowRef, inView: blockShadow0InView } = useInView({
    threshold: 0.9,
    rootMargin: "0% 0% -35% 0%",
  });
  const { ref: block1ShadowRef, inView: blockShadow1InView } = useInView({
    threshold: 0.9,
    rootMargin: "0% 0% -35% 0%",
  });
  const { ref: block2ShadowRef, inView: blockShadow2InView } = useInView({
    threshold: 0.9,
    rootMargin: "0% 0% -35% 0%",
  });

  // Project Section Variables
  const { ref: project0Ref } = useInView({ threshold: 0.8 });
  const { ref: project1Ref } = useInView({ threshold: 0.8 });
  const { ref: project2Ref } = useInView({ threshold: 0.8 });
  const { ref: project3Ref } = useInView({ threshold: 0.8 });
  const { ref: project4Ref } = useInView({ threshold: 0.8 });
  const { ref: project5Ref } = useInView({ threshold: 0.8 });
  const { ref: project6Ref } = useInView({ threshold: 0.8 });

  const projectTags = [
    { 
      tag0: "Neural Networks", 
      tag1: "Sentiment Analysis", 
      tag2: "NLP" 
    },
    { 
      tag0: "Web Development", 
      tag1: "TailwindCSS", 
      tag2: "ReactTS" 
    },
    {
      tag0: "Web Development",
      tag1: "Microservices",
      tag2: "Distributed System",
    },
    {
      tag0: "Multithreading",
      tag1: "Thread Synchronization",
      tag2: "Socket Programming",
    },
    { 
      tag0: "Web Development", 
      tag1: "MongoDB", 
      tag2: "Bcrypt" 
    },
    {
      tag0: "Mobile Application",
      tag1: "Android Studio",
      tag2: "Services/APIs",
    },
    {
      tag0: "Web Development",
      tag1: "YouTube Data API",
      tag2: "Media Queries",
    },
  ];

  // Background Animation
  const [animateAboutBGClass, setAnimateAboutBGClass] = useState("");

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      window.requestAnimationFrame(raf);
    }

    window.requestAnimationFrame(raf);
  }, []);

  return (
    <div className={`h-svh w-svw`}>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <NavigationBar
        setCurHamburgerStatus={setCurHamburgerStatus}
        overflowStatus={overflowStatus}
        setOverflowStatus={setOverflowStatus}
        navTitle={navTitle}
        navTitleColor={navTitleColor}
        navBarColor={navBarColor}
        navMainMenuBtnColor={navMainMenuBtnColor}
        navSocialColor={navSocialColor}
      />

      {curHamburgerStatus && (
        <MobileMenu
          setCurHamburgerStatus={setCurHamburgerStatus}
          overflowStatus={overflowStatus}
          setOverflowStatus={setOverflowStatus}
        />
      )}

      <About
        setNavTitle={setNavTitle}
        animateAboutBGClass={animateAboutBGClass}
        setAnimateAboutBGClass={setAnimateAboutBGClass}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />

      <div id="experiences" className="relative w-full">
        <Experience
          id = {"experience-0"}
          title = {"Research Assistant"}
          hrefLink = {"https://adric.dlsu.edu.ph/index.php/technology-education-entertainment-empathy-design-te3d-house/"}
          location = {"De La Salle University - TE3D House"}
          year = {"2024"}
          keyResponsibilities = {keyResponsibilities[0]}
          blockBool = {block0Bool}
          setBlockBool = {setBlock0Bool}
          blockShadow = {block0Shadow}
          setBlockShadow = {setBlock0Shadow}
          blockFocus = {block0Focus}
          setBlockFocus = {setBlock0Focus}
          blockIconActive = {block0IconActive}
          setBlockIconActive = {setBlock0IconActive}
          blockRef = {block0Ref}
          blockView = {block0InView}
          blockShadowRef = {block0ShadowRef}
          blockShadowInView = {blockShadow0InView}
          setNavTitle={setNavTitle}
          setAnimateAboutBGClass={setAnimateAboutBGClass}
          setNavTitleColor={setNavTitleColor}
          setNavBarColor={setNavBarColor}
          setNavMainMenuBtnColor={setNavMainMenuBtnColor}
          setNavSocialColor={setNavSocialColor}
        />

        <Experience
          id = {"experience-1"}
          title = {"V.P. - Publicity and Creatives"}
          hrefLink = {"https://www.facebook.com/LSCSLagunaCampus"}
          location = {"La Salle Computer Society (Laguna)"}
          year = {"2021-2024"}
          keyResponsibilities = {keyResponsibilities[1]}
          blockBool = {block1Bool}
          setBlockBool = {setBlock1Bool}
          blockShadow = {block1Shadow}
          setBlockShadow = {setBlock1Shadow}
          blockFocus = {block1Focus}
          setBlockFocus = {setBlock1Focus}
          blockIconActive = {block1IconActive}
          setBlockIconActive = {setBlock1IconActive}
          blockRef = {block1Ref}
          blockView = {block1InView}
          blockShadowRef = {block1ShadowRef}
          blockShadowInView = {blockShadow1InView}
          setNavTitle={setNavTitle}
          setAnimateAboutBGClass={setAnimateAboutBGClass}
          setNavTitleColor={setNavTitleColor}
          setNavBarColor={setNavBarColor}
          setNavMainMenuBtnColor={setNavMainMenuBtnColor}
          setNavSocialColor={setNavSocialColor}
        />

        <Experience
          id = {"experience-2"}
          title = {"Chairperson for Creatives"}
          hrefLink = {"https://www.facebook.com/LCSGDLSU"}
          location = {"DLSU Laguna Campus Student Government"}
          year = {"2021"}
          keyResponsibilities = {keyResponsibilities[2]}
          blockBool = {block2Bool}
          setBlockBool = {setBlock2Bool}
          blockShadow = {block2Shadow}
          setBlockShadow = {setBlock2Shadow}
          blockFocus = {block2Focus}
          setBlockFocus = {setBlock2Focus}
          blockIconActive = {block2IconActive}
          setBlockIconActive = {setBlock2IconActive}
          blockRef = {block2Ref}
          blockView = {block2InView}
          blockShadowRef = {block2ShadowRef}
          blockShadowInView = {blockShadow2InView}
          setNavTitle={setNavTitle}
          setAnimateAboutBGClass={setAnimateAboutBGClass}
          setNavTitleColor={setNavTitleColor}
          setNavBarColor={setNavBarColor}
          setNavMainMenuBtnColor={setNavMainMenuBtnColor}
          setNavSocialColor={setNavSocialColor}
        />
      </div>
      
      <div id="projects" className="relative flex 3xs:flex-row md:flex-col 3xs:snap-x md:snap-none 3xs:snap-mandatory md:overflow-x-hidden 3xs:overflow-x-auto md:whitespace-normal 3xs:whitespace-break-spaces">
        <div className="h-full w-full snap-center snap-always ">
          <Projects
            number="00"
            title="BERT-Based Sentiment Prediction Model"
            description="I am working with a team to explore the use of emojis from tweet data as initial training data for transformers (e.g., TwHIN-BERT, mBERT, Tagalog-BERT, RoBERTa-Tagalog) that are pre-trained on different domains, applied to sentiment analysis of Philippine text data. To support further research, the best-performing model from our study will be released to the public for experimental use only and is not intended for public deployment."
            image="/machineLearning.jpeg"
            hrefFile="Exploring Transformer-based Approaches in Sentiment Prediction of Philippine Tweets.pdf"
            hrefDownloadName="Exploring Transformer-based Approaches in Sentiment Prediction of Philippine Tweets"
            hrefText="View Paper"
            reverse={false}
            projectId="project0"
            projectRef={project0Ref}
            projectTags={projectTags[0]}
            setNavTitle={setNavTitle}
            setNavTitleColor={setNavTitleColor}
            setNavBarColor={setNavBarColor}
            setNavMainMenuBtnColor={setNavMainMenuBtnColor}
            setNavSocialColor={setNavSocialColor}
          />
        </div>

        <div
          ref={project1Ref}
          className="h-full min-w-full snap-center snap-always"
        >
          <Projects
            number="01"
            title="Filbis"
            description="Filbis is a Health Chatbot made by DOST and DLSU under the TE3D ADRiC Research House. The name was derived from the term Fil-Bis that means Filipino-Bisaya."
            image="/filbisBG.jpeg"
            hrefFile="https://filbis-v2.vercel.app/"
            hrefDownloadName="Filbis"
            hrefText="Try it out"
            reverse
            projectId="project1"
            projectRef={project1Ref}
            projectTags={projectTags[1]}
            setNavTitle={setNavTitle}
            setNavTitleColor={setNavTitleColor}
            setNavBarColor={setNavBarColor}
            setNavMainMenuBtnColor={setNavMainMenuBtnColor}
            setNavSocialColor={setNavSocialColor}
          />
        </div>

        <div
          ref={project2Ref}
          className="h-full min-w-full snap-center snap-always"
        >
          <Projects
            title="Online Enrollment System with Microservices Architecture"
            number="02"
            description="This system is implemented using multiple microservices distributed across several nodes (virtual machines) that are connected within the same network. It incorporates fault tolerance by supporting horizontal scaling, allowing the system to remain scalable and resilient. If one service fails, the remaining services continue to operate normally, ensuring uninterrupted functionality across the system."
            image="/distributedSystem.jpeg"
            hrefFile="DistributedSystem_Details.pdf"
            hrefDownloadName="DistributedSystem_Details"
            hrefText="Know More"
            reverse={false}
            projectId="project2"
            projectRef={project2Ref}
            projectTags={projectTags[2]}
            setNavTitle={setNavTitle}
            setNavTitleColor={setNavTitleColor}
            setNavBarColor={setNavBarColor}
            setNavMainMenuBtnColor={setNavMainMenuBtnColor}
            setNavSocialColor={setNavSocialColor}
          />
        </div>

        <div
          ref={project3Ref}
          className="h-full min-w-full snap-center snap-always"
        >
          <Projects
            number="03"
            title="Network Media Upload Service"
            description="This application simulates a multithreaded file transfer system within a local network using the producer-consumer model in C#. The producer component spawns n threads, each responsible for scanning a different folder for video files to send. Simultaneously, the consumer component also utilizes n threads to receive these video files from the producer and write them to the Desktop directory of the receiving machine. The system uses synchronization mechanisms and a task queue (regulated by a leaky bucket algorithm) to ensure smooth, thread-safe operations."
            image="/networkProducerConsumer.jpeg"
            hrefFile="networkProducerConsumer_Details.pdf"
            hrefDownloadName="networkProducerConsumer_Details"
            hrefText="Know More"
            reverse
            projectId="project3"
            projectRef={project3Ref}
            projectTags={projectTags[3]}
            setNavTitle={setNavTitle}
            setNavTitleColor={setNavTitleColor}
            setNavBarColor={setNavBarColor}
            setNavMainMenuBtnColor={setNavMainMenuBtnColor}
            setNavSocialColor={setNavSocialColor}
          />
        </div>

        <div
          ref={project4Ref}
          className="h-full min-w-full snap-center snap-always"
        >
          <Projects
            number="04"
            title="Shuttle Reservation System"
            description="This system aims to improve the existing scheduling process for the Arrows Express Shuttle, which currently relies solely on Google Forms, by introducing innovative features and a user-friendly profile system for easier access. Our goal is to provide a more comfortable and stress-free journey for all passengers by streamlining the booking experience and enhancing overall usability."
            image="/shuttleReservationBG.jpeg"
            hrefFile="https://dlsu-shuttle.onrender.com/"
            hrefDownloadName="DLSU Arrow Express"
            hrefText="Try it out"
            reverse={false}
            projectId="project4"
            projectRef={project4Ref}
            projectTags={projectTags[4]}
            setNavTitle={setNavTitle}
            setNavTitleColor={setNavTitleColor}
            setNavBarColor={setNavBarColor}
            setNavMainMenuBtnColor={setNavMainMenuBtnColor}
            setNavSocialColor={setNavSocialColor}
          />
        </div>

        <div
          ref={project5Ref}
          className="h-full min-w-full snap-center snap-always"
        >
          <Projects
            number="05"
            title="PomoPet"
            description="A productivity app that uses the Pomodoro technique with a virtual pet to boost focus, playing study-friendly music during sessions. The pet gains experience, and users can level it up by doing short exercises during breaks."
            image="/pomoPetBG.jpeg"
            hrefFile="pomoPet_Details.pdf"
            hrefDownloadName="PomoPet_Details"
            hrefText="Know More"
            reverse
            projectId="project5"
            projectRef={project5Ref}
            projectTags={projectTags[5]}
            setNavTitle={setNavTitle}
            setNavTitleColor={setNavTitleColor}
            setNavBarColor={setNavBarColor}
            setNavMainMenuBtnColor={setNavMainMenuBtnColor}
            setNavSocialColor={setNavSocialColor}
          />
        </div>

        <div
          ref={project6Ref}
          className="h-full min-w-full snap-center snap-always"
        >
          <Projects
            number="06"
            title="YouTuber Space"
            description="A web-based platform designed to promote YouTubers and make it easier for their audience to discover, browse, and enjoy their content in one centralized space. The website integrates the YouTube Data API to fetch real-time information from creators’ channels, including their latest uploads, playlists, channel statistics, and more."
            image="/kadaCraftBG.jpeg"
            hrefFile="https://kadacraft.onrender.com/"
            hrefDownloadName="KadaCraft"
            hrefText="Try it out"
            reverse={false}
            projectId="project6"
            projectRef={project6Ref}
            projectTags={projectTags[6]}
            setNavTitle={setNavTitle}
            setNavTitleColor={setNavTitleColor}
            setNavBarColor={setNavBarColor}
            setNavMainMenuBtnColor={setNavMainMenuBtnColor}
            setNavSocialColor={setNavSocialColor}
          />
        </div>
      </div>

      {/* End Footer for Projects Section */}
      <div id="githubFooter" className="relative bg-[#F0F0F0] 3xs:h-[7%] md:h-[5%]">
        <a
          href="https://github.com/mauries-lopez"
          target="_blank"
          className="relative h-full cursor-pointer flex justify-center items-center opacity-60"
          rel="noreferrer"
        >
          <div className="relative md:h-[50%] md:w-auto 3xs:h-full 3xs:w-full pl-2 pr-2 flex flex-row justify-center items-center bg-[#1A1A1A] animate-pulse md:rounded-full">
            <GitHubLight name="github" className="relative h-[60%]" />
            <p className="relative justify-center text-white text-center font-sans font-bold pl-2 pr-2 text-[11px]">
              {" "}
              Check out more on my GitHub!{" "}
            </p>
            <GitHubLight name="github" className="relative h-[60%]" />
          </div>
        </a>
      </div>

      <Contact
        setNavTitle = {setNavTitle}
        setAnimateAboutBGClass={setAnimateAboutBGClass}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />
      
    </div>
  );
}

export default App;
