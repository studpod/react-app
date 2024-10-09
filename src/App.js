import React, {useState} from 'react';
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
       <button className={`custom-button ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      > 
      { hovered ? 'Готов' : 'Натисніть' } </button>
    </div>
   
    
  );
};export default Button;
