import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App
