import React from 'react';

import './SkillsSection.css';
import SoftList   from './list-softskills';
import HardList   from './list-hardskills';
// import NewList    from './newdesign';

const SkillsSection = () => {
  return (
    <section id='skill-section'>
      <div className='skills-main-container flex-it'>
        <HardList />
        <SoftList />
      </div>
    </section>
  );

}




export default SkillsSection;
