import React from 'react';

import './SkillsSection.css';
import SoftList   from './softlist';
import HardList   from './hardskills';

class SkillsSection extends React.Component {
  render() {

    //Hard Coded, but can use API's here
    const hardskills = [
      { name : 'CSS3 & HTML5' },
      { name : 'React & React Native' },
      { name : 'Redux' },
      { name : 'Angular 2' },
      { name : 'Wordpress' },
      { name : 'Node.js & Express' },
      { name : 'MongoDB' },
      { name : 'Restful APIs' },
      { name : 'Responsive Design' },
      { name : 'Scalable Apps' },
      { name : 'GIT' },
      { name : 'and...' },
    ];

    const softskills = [
      { name : 'Love to Analyze' },
      { name : 'Creative' },
      { name : 'Innovative' },
      { name : 'Communication' },
      { name : 'Time Management' },
      { name : 'Proactive' },
      { name : 'Teamwork' },
      { name : 'Open Minded' },
      { name : 'Self Motivating' },
      { name : 'Fast Learner' },
      { name : 'Storyteller' },
      { name : 'and...' },
    ];

    return (
      <section>
        <div className='skills-main-container flex-it'>
          <div className='hs-container box-shadow'>
            <HardList list={hardskills}/>
          </div>
          <div className='ss-container box-shadow'>
            <SoftList list={softskills}/>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;
