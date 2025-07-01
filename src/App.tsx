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

  window.addEventListener("blur", () => {
    document.title = "Come Back! - Daniel Steele - React Developer";
  });

    window.addEventListener("focus", () => {
    document.title = "Daniel Steele - React Developer";
  });

  return (
    <>
      <Navigation />

      <DotGrid
        dotSize={2}
        gap={50}
        baseColor="#bfc6e0"
        activeColor="#e66465"
        proximity={150}
        shockRadius={200}
        shockStrength={10}
        resistance={500}
        returnDuration={0.5}
      >

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
