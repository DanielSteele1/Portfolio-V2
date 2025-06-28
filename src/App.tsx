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

import DotGrid from './DotGrid.tsx';

function App() {

  return (
    <>

      <DotGrid
        dotSize={3}
        gap={60}
        baseColor="#bfc6e0"
        activeColor="#e66465"
        proximity={150}
        shockRadius={10}
        shockStrength={0}
        resistance={500}
        returnDuration={1.0}
      >

        <Navigation />
        <Greeting />

      </DotGrid>

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
