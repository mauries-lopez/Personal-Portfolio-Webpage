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
    <div className="w-dvw h-svh">
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

      
      {
        <Projects
          setNavTitle = {setNavTitle}
        />
      }

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
