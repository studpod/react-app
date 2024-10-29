import React from 'react';
import GrandchildComponent from './GrandchildComponent';

const ChildComponent = React.memo(({ onButtonClick, text }) => {
  console.log('Rendering Child Component');

  return (
    <div>
      <button onClick={onButtonClick}>Click Me</button>
      <GrandchildComponent text={text} />
    </div>
  );
});

export default ChildComponent;
