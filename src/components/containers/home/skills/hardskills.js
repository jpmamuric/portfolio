import React from 'react';

const styles = {
  spanStyle: {
    display: 'block',
    fontSize: 24,
    alignSelf: 'left',
    padding: 5
  }
}

const HardList = ({list}) => {
  const { spanStyle } = styles;
  return (
    <div>
      <h2>Hard Skills</h2>
      {
        list.map (item => {
          return <span style={spanStyle}>{item.name}</span>
        })
      }
    </div>
  );
}

export default HardList;
