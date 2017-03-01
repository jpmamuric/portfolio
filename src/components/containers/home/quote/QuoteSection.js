import React from 'react';
import jump  from 'jump.js';

import './QuoteSection.css';

const QuoteSection = () => {
  return (
    <div className='quote-main-section flex-it' id='quote-section'>
      <p className='quote'>"Coming together is a beginning, keeping together is progress, working together is success."</p>
      <p className='quote-author'>by Henry Ford</p>
      <p onTouchTap={()=>jump('#header', {duration: 500})}>Top</p>
    </div>
  );
}

export default QuoteSection;
