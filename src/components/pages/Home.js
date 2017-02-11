import React from 'react';

import Card from '../common/card/Card';
import HomeNavComponent from '../navbars/homenavbar/HomeNavComponent';

import './animation.css';

const Home = () => {
  if(window.innerWidth <= 400 ){
    return (
      <div >
        <HomeNavComponent />
        <div>
          <Card className='slideUp'>
            Home Page
          </Card>
        </div>
      </div>
    );
  } else {
    return (
      <div className='slideUp'>
        <Card>
          Home Page
        </Card>
      </div>
    );
  }
}

export default Home;
