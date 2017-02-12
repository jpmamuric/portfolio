import React from 'react';

import HomeNavComponent from '../navbars/homenavbar/HomeNavComponent';
import HomeSection      from '../containers/home/banner/HomeSection';
import GreetingSection  from '../containers/home/greetings/GreetingSection';

import Header           from '../common/header/Header';

import './animation.css';

const Home = () => {
  if(window.innerWidth <= 768 ){
    return (
      <div >
        <header>
          <HomeNavComponent />
        </header>
        <section className='slideUp'>
          <HomeSection />
        </section>
        <section className='slideUp'>
          <GreetingSection />
        </section>
      </div>
    );
  } else {
    return (
      <div >
        <header>
          <Header title='Web' src={require('../../assets/logo4.png')} alt='jp mamuric'/>
        </header>
        <section className='slideUp'>
          <HomeSection />
        </section>
        <section className='slideUp'>
          <GreetingSection />
        </section>
      </div>
    );
  }
}

export default Home;
