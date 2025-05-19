import React from 'react';
import {useState} from 'react';
import './App.css';
import Navigation from './Navigation';
import Greeting from './Greeting';
import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {

  return (
    <>
    <div className="fade-in"> 
        <Navigation />
        <Greeting />
        <Skills />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
        </div>

    </>
  )
}

export default App;
