import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Project from './routes/Project';


import './App.css'

function App() {
  

  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    
   </Routes>
  )
}

export default App
