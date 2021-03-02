import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '3px solid orange', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;