import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GestureBox = () => {
 
  const [direction, setDirection] = useState(null);

  // Варіанти анімації для різних жестів
  const variants = {
    swipeLeft: { x: -200, backgroundColor: "#ff4d4d", transition: { duration: 0.5 } },
    swipeRight: { x: 200, backgroundColor: "#4dff4d", transition: { duration: 0.5 } },
    swipeUp: { y: -200, backgroundColor: "#4d4dff", transition: { duration: 0.5 } },
    swipeDown: { y: 200, backgroundColor: "#ffff4d", transition: { duration: 0.5 } },
    tap: { scale: 1.2, transition: { duration: 0.2 } },
    reset: { x: 0, y: 0, scale: 1, backgroundColor: "#ddd", transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      // Визначення напрямку свайпа та запуск відповідної анімації
      onDragEnd={(event, info) => {
        const { offset } = info;

        // Обчислення напрямку свайпа
        if (offset.x < -50) setDirection('swipeLeft');
        else if (offset.x > 50) setDirection('swipeRight');
        else if (offset.y < -50) setDirection('swipeUp');
        else if (offset.y > 50) setDirection('swipeDown');
        else setDirection('reset');
      }}
      // Анімація при натисканні
      onTap={() => setDirection('tap')}
      // Анімовані властивості
      animate={direction || 'reset'}
      variants={variants}
      drag
      style={{
        width: 150,
        height: 150,
        borderRadius: 20,
        backgroundColor: "#ddd",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        cursor: 'grab'
      }}
    >
      {direction || "Drag / Tap"}
    </motion.div>
  );
};



export default GestureBox;
