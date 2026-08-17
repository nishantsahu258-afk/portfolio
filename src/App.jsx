import { useState, useEffect } from 'react';
import Preloader   from './components/Preloader/Preloader';
import Cursor      from './components/Cursor/Cursor';
import Nav         from './components/Nav/Nav';
import SideNav     from './components/SideNav/SideNav';
import Hero        from './components/Hero/Hero';
import Marquee     from './components/Marquee/Marquee';
import About       from './components/About/About';
import Work        from './components/Work/Work';
import Background  from './components/Background/Background';
import Contact     from './components/Contact/Contact';
import Footer      from './components/Footer/Footer';

// Import our separated JS logic
import { initPreloader, initCursor, initNav, initAnimations } from './js/main.js';

export default function App() {
  const [gsapReady, setGsapReady] = useState(false);

  useEffect(() => {
    // 1. Init cursor globally
    const cleanupCursor = initCursor();
    // 2. Init nav & sidebar
    const cleanupNav = initNav();

    return () => {
      cleanupCursor();
      cleanupNav();
    };
  }, []);

  useEffect(() => {
    // 3. Init preloader. Once done, trigger GSAP animations
    const cleanupPreloader = initPreloader(() => {
      setGsapReady(true);
      // Wait for React to render the true state, then init animations
      setTimeout(() => {
        initAnimations();
      }, 50);
    });

    return () => {
      cleanupPreloader();
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Preloader />
      <Cursor />
      <Nav />
      <SideNav />

      <main id="top">
        <Hero gsapReady={gsapReady} />
        <Marquee />
        <About />
        <Work />
        <Background />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
