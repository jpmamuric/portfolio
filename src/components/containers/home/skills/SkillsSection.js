import React from 'react';

import './SkillsSection.css';
import SoftList   from './softlist';
import HardList   from './hardskills';

class SkillsSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hsUrl: 'logosm.png',
      ssURl: 'diet.jpg'
    };
  }

  render() {
    //Hard Coded, but can use API's here
    const hardskills = [
      { name : 'CSS3 & HTML5', hsUrl: 'htmlcss.jpg' },
      { name : 'React' },
      { name : 'React Native' },
      { name : 'Redux' },
      { name : 'Angular 2' },
      { name : 'Node.js' },
      { name : 'MongoDB' },
      { name : 'Restful APIs' },
      { name : 'Responsive' },
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
          <div className='hs-container box-shadow flex-it'>
            <HardList list={hardskills}/>
            <img className='hs-img' src={require(`../../../../assets/${this.state.hsUrl}`)} />
          </div>
          <div className='ss-container box-shadow flex-it'>
            <SoftList list={softskills}/>
            <img className='ss-img' src={require(`../../../../assets/${this.state.ssURl}`)}/>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;
