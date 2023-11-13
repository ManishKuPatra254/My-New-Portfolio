import { Fragment, useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import Home from './Home/Home'
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './Loader/Loader';

function App() {

  const location = useLocation();
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const loaderActions = setTimeout(() => {
      setLoader(false);
    }, 400000);

    return () => clearTimeout(loaderActions);
  }, []);


  return (
    <Fragment>
      <div className='App'>
        {
          loader ? (
            <Loader />
          ) : (
            <Fragment>
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
            </Fragment>
          )
        }
      </div>
    </Fragment>
  )
}

export default App
