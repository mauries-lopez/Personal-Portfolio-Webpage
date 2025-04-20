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

function App() {

  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ curHamburgerStatus, setCurHamburgerStatus ] = useState(false);
  const [ overflowStatus, setOverflowStatus] = useState(true); // True = With Scrolling; False = No Scrolling

  const [ navTitle, setNavTitle ] = useState("Section Title");
  const [ navTitleColor, setNavTitleColor] = useState("text-white")
  const [ navBarColor, setNavBarColor] = useState("#1A1A1A");
  const [ navMainMenuBtnColor, setNavMainMenuBtnColor] = useState("bg-white");
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
    <div className="h-svh w-full">
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
        image="/distributedSystem.jpeg"
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
        image="/distributedSystem.jpeg"
        reverse={true}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />

                  
      <Projects
        title="Online Enrollment System with Fault Tolerance"
        number="02"
        description="This system is implemented using different microservices distributed across multiple nodes (virtual machines) that are connected within the same network. It has fault tolerance, meaning that if one feature goes down, the rest of the features remain fully functional."
        image="/distributedSystem.jpeg"
        reverse={false}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />
      
      <Projects
        number="03"
        title="Shuttle Reservation System"
        description="This system aims to improve the existing scheduling process for the Arrows Express Shuttle, which currently relies solely on Google Forms, by introducing innovative features and a user-friendly profile system for easier access. Our goal is to provide a more comfortable and stress-free journey for all passengers by streamlining the booking experience and enhancing overall usability."
        image="/distributedSystem.jpeg"
        reverse={true}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />

      <Projects
        number="04"
        title="PomoPet"
        description="A productivity app that uses the Pomodoro technique with a virtual pet to boost focus, playing study-friendly music during sessions. The pet gains experience, and users can level it up by doing short exercises during breaks."
        image="/distributedSystem.jpeg"
        reverse={false}
        setNavTitle={setNavTitle}
        setNavTitleColor={setNavTitleColor}
        setNavBarColor={setNavBarColor}
        setNavMainMenuBtnColor={setNavMainMenuBtnColor}
        setNavSocialColor={setNavSocialColor}
      />


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
