import React from 'react';

const styles = {
  spanStyle: {
    display: 'block',
    fontSize: '1.25em',
    marginBottom: 5
  }
}

const SoftList = ({list}) => {
  const { spanStyle } = styles;
  return (
    <div>
      <h2>Soft Skills</h2>
      <ul className='ss-ul'>
        {
          list.map ((item, i) => {
            return <li key={i} style={spanStyle}>{item.name}</li>
          })
        }
      </ul>
      <p className='ss-stronger'>working
        <br />
        to be
        <br />
        <strong> Stronger </strong>
       </p>
    </div>
  );
}

export default SoftList;
