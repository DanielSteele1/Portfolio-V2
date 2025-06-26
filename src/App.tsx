import React from 'react';
import Navigation from './Navigation';
import Greeting from './Greeting';
import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Blog from './Blog';

function App() {

  return (
    <>

      <Navigation />

      <Greeting />
      <Skills />


      <AboutMe />
       <Blog /> 

      <Projects />
      <BackToTop />
      <Contact />
      <Footer />

    </>
  )
}

export default App;
