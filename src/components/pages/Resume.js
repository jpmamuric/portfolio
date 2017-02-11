import React from 'react';

import Card from '../common/card/Card';
import ResumeNavComponent from '../navbars/resumenavbar/ResumeNavComponent'

import './animation.css';

const Resume = () => {
  if(window.innerWidth <= 450 ){
    return (
      <div >
        <ResumeNavComponent />
        <div>
          <Card className='slideUp'>
            Resume Page
          </Card>
        </div>
      </div>
    );
  } else {
    return (
      <div className='slideUp'>
        <Card>
          Resume Page
        </Card>
      </div>
    );
  }
}

export default Resume;
