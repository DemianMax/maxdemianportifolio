
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkPortfolio from '../components/WorkPortfolio';
import TechnicalSkills from '../components/TechnicalSkills';
import Career from '../components/Career';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />
      <Hero />
      <WorkPortfolio />
      <TechnicalSkills />
      <Career />
      <Contact />
    </div>
  );
};

export default Index;
