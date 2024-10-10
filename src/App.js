import React, {useState} from 'react';
import Square from './components/Square';
import BoxAnimation from './components/BoxAnimation';
import RotatingCircle from './components/RotatingCircle';
import AnimatedComponent from './components/AnimationElement';
import './App.css';

const App = () => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className="App">
      <div>
       <button className={`custom-button ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      > 
      { hovered ? 'Готов' : 'Натисніть' } </button>
      </div>
      <div>
        <Square />
      </div>
      <div>
        <BoxAnimation />
      </div>
      <div>
        <RotatingCircle />
      </div>
      <div>
        <AnimatedComponent />
      </div>
    </div>
   
    
  );
};export default App;
