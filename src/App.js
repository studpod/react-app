import React, {useState} from 'react';
import Square from './components/Square';
import './App.css';

const Button = () => {
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
    </div>
   
    
  );
};export default Button;
