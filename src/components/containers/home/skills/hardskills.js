import React from 'react';

const styles = {
  spanStyle: {
    display: 'block',
    fontSize: '1.25em',
    marginBottom: 5
  }
}

const HardList = ({list}) => {
  const { spanStyle } = styles;
  return (
    <div>
      <h2>Hard Skills</h2>
      <ul className='hs-ul'>
        {
          list.map ((item, i) => {
            return <li key={i} style={spanStyle}>{item.name}</li>
          })
        }
      </ul>
      <p className='hs-greater'>working
        <br />
        to be
        <br />
        <strong> Greater </strong>
       </p>
    </div>
  );
}

export default HardList;
