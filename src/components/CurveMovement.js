import React from 'react';
import { motion } from 'framer-motion';

const MovingElement = () => {
  return (
   
    <motion.div
      initial={{ opacity: 0, scale: 0.5, backgroundColor: "#ff0000" }}
      animate={{
        opacity: [0.5, 1, 0.8],
        scale: [0.5, 1, 0.7],
        backgroundColor: ["#ff0000", "#00ff00", "#0000ff"],
        x: [0, 100, 200, 300],  // Рух по осі X
        y: [0, -50, 100, 50],   // Рух по осі Y, створюючи криву
      }}
      transition={{
        duration: 5,  // Тривалість анімації
        ease: "easeInOut",  // Тип кривої
        repeat: Infinity,  // Повторювати анімацію нескінченно
      }}
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        position: "absolute",
      }}
    />

  );
};


    
  
  export default MovingElement;