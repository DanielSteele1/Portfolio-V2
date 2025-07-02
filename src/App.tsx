import Navigation from './Navigation';
import Greeting from './Greeting';
import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Blog from './Blog';

import Squares from './Squares.tsx';

import { Analytics } from "@vercel/analytics/react"

declare global {
  interface Window {
    sa_event?: (event: string) => void;
  }
}

function App() {

  window.addEventListener("blur", () => {
    document.title = "Come Back! - Daniel Steele - React Developer";
  });

  window.addEventListener("focus", () => {
    document.title = "Daniel Steele - React Developer";
  });

  const handleDownloadAndView = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window.sa_event === 'function') {
      window.sa_event('cv_downloaded');
    } else {
      console.error("Simple Analytics isn't loaded");
    }
    // download and view document
    const link = document.createElement('a');
    link.href = '/Daniel_Steele_Frontend_Developer_CV.pdf';
    link.download = '/Daniel_Steele_Frontend_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navigation handleDownloadAndView={handleDownloadAndView} />

      <div className="greeting-bg-wrap">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#5f5959ff'
        />
        <Greeting handleDownloadAndView={handleDownloadAndView} />
      </div>

      <Skills />
      <AboutMe />
      <Blog />
      <Projects />
      <BackToTop />
      <Contact />
      <Footer />
      <Analytics />

    </>
  )
}

export default App;
