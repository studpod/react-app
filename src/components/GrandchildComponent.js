import React from 'react';

const GrandchildComponent = React.memo(({ text }) => {
  console.log('Rendering Grandchild Component');

  return <p>{text}</p>;
});

export default GrandchildComponent;
