
import { useEffect } from 'react';
import Navigation from './Navigation';
import Greeting from './Greeting';
import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';
// import Blog from './Blog';

import { Analytics } from "@vercel/analytics/react"

import { ThpaceGL } from 'thpace';

declare global {
  interface Window {
    sa_event?: (event: string) => void;
  }
}

function App() {

  useEffect(() => {
    const canvas = document.querySelector('.greeting-canvas') as HTMLCanvasElement | null;

    if (canvas) {
      const settings = {
        colors: ['#4c4fa8', '#1f2333', '#7a2d2d'],
        triangleSize: 100,
      };
      ThpaceGL.create(canvas, settings);
    } else {
      console.error('Canvas not found');
    }
  }, []);

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

        <Greeting handleDownloadAndView={handleDownloadAndView} />
      </div>

      <AboutMe />
      <Skills />
      {/* <Blog /> */}
      <Projects />
      <BackToTop />
      <Contact />
      <Footer />
      <Analytics />

    </>
  )
}

export default App;
