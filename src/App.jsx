import './App.css'
import "./index.css"
import { useState } from "react";
import { LoadingScreen } from './components/LoadingScreen';
import { NavigationBar } from './components/NavigationBar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { TechStack } from './components/sections/TechStack';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

function App() {

  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ curHamburgerStatus, setCurHamburgerStatus ] = useState(false);
  const [ overflowStatus, setOverflowStatus] = useState(true); // True = With Scrolling; False = No Scrolling
  const [ navTitle, setNavTitle ] = useState("Section Title");

  return (
    <div className="relative w-full h-dvh">
      {!isLoaded && 
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      }
  
      {
        <NavigationBar 
          setCurHamburgerStatus={setCurHamburgerStatus}
          overflowStatus={overflowStatus}
          setOverflowStatus={setOverflowStatus}
          navTitle = {navTitle}
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
        />
      }
    
      {
        <Projects
          setNavTitle = {setNavTitle}
        />
      }

      {
        <TechStack
          setNavTitle = {setNavTitle}
        />
      }

      {
        <Education
          setNavTitle = {setNavTitle}
        />
      }

      {
        <Experience
          setNavTitle = {setNavTitle}
        />
      }

      {
        <Contact
          setNavTitle = {setNavTitle}
        />
      }    
      
    </div>
  );
}

export default App
