import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './index.css'
import Workspacecard from "./components/workspace";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>CV Builder</h1>
      <p className='title-para'>Create your CV by filling out the sections below</p>
      <Workspacecard  /> 
    </>
  )
}

export default App
