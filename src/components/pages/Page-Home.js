import React from 'react';

import HomeNavComponent from '../navbars/homenavbar/HomeNavComponent';
import GreetingSection  from '../containers/home/greetings/GreetingSection';
import SkillsSection    from '../containers/home/skills/SkillsSection';
import QuoteSection     from '../containers/home/quote/QuoteSection';

import './pages.css';

const Home = () => {

  return (
    <div>
      <HomeNavComponent />
      <GreetingSection />
      <SkillsSection />
      <QuoteSection />
    </div>
  );
}



export default Home;
