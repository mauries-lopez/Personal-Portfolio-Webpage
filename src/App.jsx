import './App.css'
import "./index.css"
import { useState } from "react";
import { LoadingScreen } from './components/LoadingScreen';
import { NavigationBar } from './components/NavigationBar';

function App() {

  const [ isLoaded, setIsLoaded ] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && <NavigationBar/>}
    </>
  )
}

export default App
