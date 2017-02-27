import React from 'react';

import './HomeSection.css';

class HomeSection extends React.Component {
  render() {
    return (
      <section>
        <article className='main-container'>
          <div className='landing-img flex-it' >
            <div className='img-cloud anim'>
              
            </div>
            <div className='landing-message slideUp'>Welcome</div>
          </div>
        </article>
      </section>
    );
  }
}

export default HomeSection;
