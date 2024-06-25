import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

function App() {
  const [isGameStarted, setisGameStarted] = useState(false)

  const toggleGamePlay=()=>{
    setisGameStarted((prev)=>!prev) 
  }

  return (
    <>
  {
   
    isGameStarted? <GamePlay></GamePlay>:<StartGame toggle={toggleGamePlay}/>
  }
    </>
  )
}

export default App
