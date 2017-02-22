import React from 'react';

import './HomeSection.css';

class HomeSection extends React.Component {
  render() {
    return (
      <section>
        <article className='main-container'>
          <div className='landing-img flex-it' >
            <div className='landing-message slideUp'>This is words</div>
          </div>
        </article>
      </section>  
    );
  }
}

export default HomeSection;
