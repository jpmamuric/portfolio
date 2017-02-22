import React from 'react';

import './GreetingSection.css';

class GreetingSection extends React.Component {
  render() {
    return (
      <section>
        <div className='greetings-main-container flex-it'>
          <div className='greetings-text-container flex-it'>
            <div className='greetings-text'>
              <span className='g1'>Hi!</span>
              <span className='g2'>my name is</span>
              <span className='g3'>JP </span>
              <span className='g4'>(short for Jan Peter)</span>
              <span className='g5'>Mamuric</span>
              <span className='g6'>and I'm a  </span>
              <span className='g7'>javascript developer</span>
              <span className='g8'>Nice to meet you!</span>
            </div>
          </div>
          <img className='greetings-img' alt='jp greetings' src={require('../../../../assets/about2.png')}/>
        </div>
      </section>  
    );
  }
}

export default GreetingSection;
