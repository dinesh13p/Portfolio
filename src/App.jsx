import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Services/>
      <AboutMe/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
