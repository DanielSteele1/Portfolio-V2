import React from 'react';
import { useState } from 'react';
import './App.css';
import Navigation from './Navigation';
import Greeting from './Greeting';
import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';


function App() {

  return (
    <>

      <Navigation />
      <div className="fade-in">
        <Greeting />
      </div>

      <Skills />
      <Projects />
      <AboutMe />
      <BackToTop />
      <Contact />
      <Footer />

    </>
  )
}

export default App;
