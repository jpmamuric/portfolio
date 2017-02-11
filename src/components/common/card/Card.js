import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='Card slideUp'>
      {props.children}
    </div>
  );
}

export default Card;
