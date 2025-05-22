import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
