
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Footer from './Footer';
import BlogPost from './BlogPost';

import React, { useEffect, useState } from 'react';

import { Analytics } from "@vercel/analytics/react"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

declare global {
  interface Window {
    sa_event?: (event: string) => void;
  }
}

import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';


function App() {

  const [isThemeOn, setThemeOn] = useState(() => {

    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === 'light' : false;

  });

  const handleThemeButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    setThemeOn(prev => !prev);
  }

  useEffect(() => {

    const theme = isThemeOn ? "light" : "dark";

    if (!document.startViewTransition) {
      document.documentElement.setAttribute(
        "data-theme", theme,
      );
      return;
    }

    document.startViewTransition(() => {
      document.documentElement.setAttribute(
        "data-theme", theme,
      );

      setTimeout(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, 500);
    });

    localStorage.setItem("theme", theme);
    console.log("Theme Applied", theme);

  }, [isThemeOn, setThemeOn]);


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
      <BrowserRouter>
        <Navigation
          handleDownloadAndView={handleDownloadAndView}
          handleThemeButton={handleThemeButton}
          isThemeOn={isThemeOn} />

        <Routes>
          <Route path="/" element={<Dashboard handleDownloadAndView={handleDownloadAndView} />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:slug" element={<BlogPost />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>

        <Footer />
        <Analytics />
      </BrowserRouter>

    </>
  )
}

export default App;
