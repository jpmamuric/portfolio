import React from 'react'
import './Card.css';

const Card = ({children}) => {
  return (
    <div className='Card slideUp'>
      {children}
    </div>
  );
}

export default Card;
