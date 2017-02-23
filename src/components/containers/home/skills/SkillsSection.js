import React from 'react';

import './SkillsSection.css';
import SoftList   from './softlist';
import HardList   from './hardlist';

class SkillsSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ssURl: 'diet.jpg'
    };
  }

  render() {
    //Hard Coded, but can use API's here


    return (
      <section>
        <div className='skills-main-container flex-it'>
          <HardList />
          <SoftList />
        </div>
      </section>
    );
  }
}

export default SkillsSection;
