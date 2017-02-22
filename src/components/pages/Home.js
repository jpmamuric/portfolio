import React from 'react';

import HomeNavComponent from '../navbars/homenavbar/HomeNavComponent';
import HomeSection      from '../containers/home/banner/HomeSection';
import GreetingSection  from '../containers/home/greetings/GreetingSection';
import SkillsSection    from '../containers/home/skills/SkillsSection';

import './pages.css';

const Home = () => {
  return (
    <div>
      <HomeNavComponent />
      <HomeSection />
      <GreetingSection />
      <SkillsSection />
    </div>
  );
}

export default Home;
