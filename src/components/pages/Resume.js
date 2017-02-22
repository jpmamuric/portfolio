import React from 'react';

import Card from '../common/card/Card';
import ResumeNavComponent from '../navbars/resumenavbar/ResumeNavComponent'
import './pages.css';

const Resume = () => {
  return (
    <div >
      <ResumeNavComponent />
      <section className='slideUp'>
        <Card >
          Resume Page
        </Card>
      </section>
    </div>
  );
}

export default Resume;
