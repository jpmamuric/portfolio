import React from 'react';
import jump  from 'jump.js';
import { Link } from 'react-router';

import HomeNavComponent from '../../../navbars/navbar-home/HomeNavComponent';
import './HeroSection.css';


class HeroSection extends React.Component {
  render() {
    return (
      <section>
        <div className='landing-img'>
          <HomeNavComponent />
          <div className='landing-message slideUp'>
            JP Mamuric
            <div className='landing-nav flex-it'>
              <div className='landing-icon'>
                <img
                  src={require('../../../../assets/about.png')} alt='about jp mamuric icon'
                  onTouchTap={()=>jump('#greeting-section')}
                  />
                <p >About</p>
              </div>
              <div className='landing-icon'>
                <img
                  src={require('../../../../assets/projects.png')} alt='web development icon'
                  onTouchTap={()=>jump('#projects')}
                />
              <p >Projects</p>
              </div>
              <div className='landing-icon'>
                <Link to='/resume'>
                  <img src={require('../../../../assets/blog.png')} alt='jp mamuric blog icon' />
                </Link>
              <p >Resume</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
