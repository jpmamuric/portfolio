import React from 'react';

import './GreetingSection.css';

class GreetingSection extends React.Component {
  render() {
    return (
      <div className='greetings-container'>
        <div>
          Hello! my name is
        </div>
        <div>
          Jan Peter Mamuric
        </div>
        <div>I am a: </div>
        <div>Nice to meet you!</div>
      </div>
    );
  }

}

export default GreetingSection;
