import React from 'react';

import './Resume.css';

const Resume = () => {
  return (
    <div>
      <embed src={require('./Resume.pdf')} className='resume' type='application/pdf' />
    </div>
  );
}

export default Resume;
