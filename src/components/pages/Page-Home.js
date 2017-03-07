import React from 'react';

import HeroSection      from '../containers/home/hero/HeroSection';
import GreetingSection  from '../containers/home/greetings/GreetingSection';
import SkillsSection    from '../containers/home/skills/SkillsSection';
import ProjectSection   from '../containers/home/projects/ProjectSection';
import QuoteSection     from '../containers/home/quote/QuoteSection';
import Footer           from  '../common/footer/Footer';

import './Page.css';

const Home = () => {

  return (
    <div>
      <HeroSection />
      <GreetingSection />
      <SkillsSection />
      <ProjectSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}



export default Home;
