import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import './App.css';


const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
