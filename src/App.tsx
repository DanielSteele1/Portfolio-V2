import React from "react";

import './App.css';
import Navigation from './Navigation.tsx';
import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {

  return (
    <>
      <div>

        <Navigation />

        <div className="container">
          <div className="content">
            <h1>Welcome to my portfolio</h1>
            <p>This is a simple portfolio website.</p>
        </div>
        </div>

        <AboutMe />

        <Skills />

        <Projects />

        <Contact />

        <Footer />
      
      </div>
    </>
  )
}

export default App;
