import React from 'react';

import ResumeNavComponent from '../navbars/navbar-resume/ResumeNavComponent'
import Resume             from '../containers/resume/Resume';
import './Page.css';

const ResumePage = () => {
  return (
    <div >
      <ResumeNavComponent />
        <Resume /> 
    </div>
  );
}

export default ResumePage;
