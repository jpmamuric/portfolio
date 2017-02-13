import React from 'react';

import Card from '../common/card/Card';
import ResumeNavComponent from '../navbars/resumenavbar/ResumeNavComponent'
import Header           from '../common/header/Header';
import './animation.css';

const Resume = () => {
  if(window.innerWidth <= 768 ){
    return (
      <div >
        <header >
          <ResumeNavComponent />
        </header>
        <section className='slideUp'>
          <Card >
            Resume Page
          </Card>
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
          <Card>
            Resume Page
          </Card>
        </section>
      </div>
    );
  }
}

export default Resume;
