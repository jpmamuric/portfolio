import React from 'react';

import Card               from '../common/card/Card';
import ResumeNavComponent from '../navbars/resumenavbar/ResumeNavComponent'
import './pages.css';

const Resume = () => {
  return (
    <div >
      <ResumeNavComponent />
      <div>Resume Page</div>
      <section className='slideUp'>
        <Card >
          Resume 
        </Card>
      </section>
    </div>
  );
}

export default Resume;
