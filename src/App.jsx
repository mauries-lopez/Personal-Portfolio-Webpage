import './App.css'
import "./index.css"
import { useState, useEffect } from "react";
import { LoadingScreen } from './components/LoadingScreen';
import { NavigationBar } from './components/NavigationBar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { TechStack } from './components/sections/TechStack';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import Lenis from 'lenis'
import { GitHubLight } from 'developer-icons';

function App() {
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ curHamburgerStatus, setCurHamburgerStatus ] = useState(false);
  const [ overflowStatus, setOverflowStatus] = useState(true); // True = With Scrolling; False = No Scrolling

  const [ navTitle, setNavTitle ] = useState("Section Title");
  const [ navTitleColor, setNavTitleColor] = useState("text-white")
  const [ navBarColor, setNavBarColor] = useState("#1A1A1A");
  const [ navMainMenuBtnColor, setNavMainMenuBtnColor] = useState("bg-[#F0F0F0]");
  const [ navSocialColor, setNavSocialColor] = useState(""); // mix-blend-darken = #1A1A1A

  // Background Animation
  const [animateAboutBGClass, setAnimateAboutBGClass] = useState("");

  useEffect( () => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <div className={`h-svh w-svw ${isLoaded ? '' : 'overflow-hidden'}`} >
      {!isLoaded && 
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      }

      {
        <NavigationBar 
          setCurHamburgerStatus={setCurHamburgerStatus}
          overflowStatus={overflowStatus}
          setOverflowStatus={setOverflowStatus}
          navTitle = {navTitle}
          navTitleColor = {navTitleColor}
          navBarColor = {navBarColor}
          navMainMenuBtnColor = {navMainMenuBtnColor}
          navSocialColor = {navSocialColor}
        />
      }
  
      {curHamburgerStatus && 
        <MobileMenu 
          setCurHamburgerStatus={setCurHamburgerStatus}
          overflowStatus={overflowStatus}
          setOverflowStatus={setOverflowStatus}
        />
      }
      
      {
        <About
          setNavTitle = {setNavTitle}
          animateAboutBGClass = {animateAboutBGClass}
          setAnimateAboutBGClass = {setAnimateAboutBGClass}
          setNavTitleColor = {setNavTitleColor}
          setNavBarColor = {setNavBarColor}
          setNavMainMenuBtnColor = {setNavMainMenuBtnColor}
          setNavSocialColor = {setNavSocialColor}
        />
      }
      
      {
        <Experience
          setNavTitle = {setNavTitle}
          setAnimateAboutBGClass = {setAnimateAboutBGClass}
          setNavTitleColor = {setNavTitleColor}
          setNavBarColor = {setNavBarColor}
          setNavMainMenuBtnColor = {setNavMainMenuBtnColor}
          setNavSocialColor = {setNavSocialColor}
        />
      }

      <Projects
        number="00"
        title="BERT-Based Sentiment Prediction Model"
        description="I am working with a team to explore the use of emojis from tweet data as initial training data for transformers (e.g., TwHIN-BERT, mBERT, Tagalog-BERT, RoBERTa-Tagalog) that are pre-trained on different domains, applied to sentiment analysis of Philippine text data. To support further research, the best-performing model from our study will be released to the public for experimental use only and is not intended for public deployment."
        image="/machineLearning.jpeg"
        hrefFile="Exploring Transformer-based Approaches in Sentiment Prediction of Philippine Tweets.pdf"
        hrefDownloadName="Exploring Transformer-based Approaches in Sentiment Prediction of Philippine Tweets"
        hrefText="View Paper"
        reverse={false}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />

      
      <Projects
        number="01"
        title="Filbis"
        description="Filbis is a Health Chatbot made by DOST and DLSU under the TE3D ADRiC Research House. The name was derived from the term Fil-Bis that means Filipino-Bisaya."
        image="/filbisBG.jpeg"
        hrefFile="https://filbis-v2.vercel.app/"
        hrefDownloadName="Filbis"
        hrefText="Try it out"
        reverse={true}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />

                  
      <Projects
        title="Online Enrollment System with Microservices Architecture"
        number="02"
        description="This system is implemented using multiple microservices distributed across several nodes (virtual machines) that are connected within the same network. It incorporates fault tolerance by supporting horizontal scaling, allowing the system to remain scalable and resilient. If one service fails, the remaining services continue to operate normally, ensuring uninterrupted functionality across the system."
        image="/distributedSystem.jpeg"
        hrefFile="DistributedSystem_Details.pdf"
        hrefDownloadName="DistributedSystem_Details"
        hrefText="Know More"
        reverse={false}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />
      
      
      <Projects
        number="03"
        title="Network Media Upload Service"
        description="This application simulates a multithreaded file transfer system within a local network using the producer-consumer model in C#. The producer component spawns n threads, each responsible for scanning a different folder for video files to send. Simultaneously, the consumer component also utilizes n threads to receive these video files from the producer and write them to the Desktop directory of the receiving machine. The system uses synchronization mechanisms and a task queue (regulated by a leaky bucket algorithm) to ensure smooth, thread-safe operations."
        image="/networkProducerConsumer.jpeg"
        hrefFile="networkProducerConsumer_Details.pdf"
        hrefDownloadName="networkProducerConsumer_Details"
        hrefText="Know More"
        reverse={true}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />

      <Projects
        number="04"
        title="Shuttle Reservation System"
        description="This system aims to improve the existing scheduling process for the Arrows Express Shuttle, which currently relies solely on Google Forms, by introducing innovative features and a user-friendly profile system for easier access. Our goal is to provide a more comfortable and stress-free journey for all passengers by streamlining the booking experience and enhancing overall usability."
        image="/shuttleReservationBG.jpeg"
        hrefFile="https://dlsu-shuttle.onrender.com/"
        hrefDownloadName="DLSU Arrow Express"
        hrefText="Try it out"
        reverse={false}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />

      <Projects
        number="05"
        title="PomoPet"
        description="A productivity app that uses the Pomodoro technique with a virtual pet to boost focus, playing study-friendly music during sessions. The pet gains experience, and users can level it up by doing short exercises during breaks."
        image="/pomoPetBG.jpeg"
        hrefFile="pomoPet_Details.pdf"
        hrefDownloadName="PomoPet_Details"
        hrefText="Know More"
        reverse={true}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />


      {/* End Footer for Projects Section */}
      <div className="relative bg-[#F0F0F0] 3xs:h-[20%] md:h-[5%]">
        <a href={`https://github.com/mauries-lopez`} target="_blank" className="relative h-full cursor-pointer flex justify-center items-center opacity-60">
          <div className="relative h-[50%] pl-2 pr-2 flex flex-row justify-center items-center bg-[#1A1A1A] animate-pulse rounded-full">
              <GitHubLight name="github" className="relative h-[60%]"/>
              <p className="relative justify-center text-white text-center font-sans font-bold pl-2 pr-2 text-[11px]"> Check out more on my GitHub! </p>
              <GitHubLight name="github" className="relative h-[60%]"/>
          </div>
        </a>
      </div>
      

      {/*
      {
        <TechStack
          setNavTitle = {setNavTitle}
        />
      }

      {
        <Contact
          setNavTitle = {setNavTitle}
        />
      }    
      */}
    </div>
  );
}

export default App
