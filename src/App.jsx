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

  return (
    <div className="relative w-full h-dvh">
      {!isLoaded && 
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      }
  
      {isLoaded && 
        <NavigationBar 
          setCurHamburgerStatus={setCurHamburgerStatus}
          overflowStatus={overflowStatus}
          setOverflowStatus={setOverflowStatus}
        />
      }
  
      {curHamburgerStatus && 
        <MobileMenu 
          setCurHamburgerStatus={setCurHamburgerStatus}
          overflowStatus={overflowStatus}
          setOverflowStatus={setOverflowStatus}
        />
      }
      
      {isLoaded &&
        <About/>
      }
    
      {isLoaded &&
        <Projects/>
      }

      {isLoaded &&
        <TechStack/>
      }

      {isLoaded &&
        <Education/>
      }

      {isLoaded &&
        <Experience/>
      }

      {isLoaded &&
        <Contact/>
      }    
      
    </div>
  );
}

export default App
