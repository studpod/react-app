import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = () => {
  // Стани компонента
  const [state, setState] = useState('small');

  // Визначаємо властивості для кожного стану
  const variants = {
    small: { width: 100, height: 100, x: 0, y: 0, backgroundColor: "#ff0000" },
    medium: { width: 200, height: 200, x: 100, y: 100, backgroundColor: "#00ff00" },
    large: { width: 300, height: 300, x: 200, y: 200, backgroundColor: "#0000ff" }
  };

  // Функція для зміни стану компонента
  const toggleState = () => {
    if (state === 'small') setState('medium');
    else if (state === 'medium') setState('large');
    else setState('small');
  };

  return (
    <div>
      <motion.div
        // Анімовані властивості на основі поточного стану
        animate={state}
        variants={variants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <p style={{ color: '#fff' }}>{state}</p>
      </motion.div>

      {/* Кнопка для перемикання стану */}
      <button onClick={toggleState} style={{ marginTop: '20px' }}>
        Змінити стан
      </button>
    </div>
  );
};



export default AnimatedBox;
