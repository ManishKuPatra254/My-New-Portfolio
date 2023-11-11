import { Fragment } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import Home from './Home/Home'
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  
  const location = useLocation();

  return (
    <Fragment>
      <div className='App'>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Fragment>
  )
}

export default App
