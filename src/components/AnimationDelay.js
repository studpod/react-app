import React from 'react';
import { motion } from 'framer-motion';

const AnimationDelay = ({ delay, backgroundColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: delay, 
        ease: "easeInOut"
      }}
      style={{
        width: 100,
        height: 100,
        backgroundColor,
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '18px',
        borderRadius: '10px',
      }}
    >
      Box
    </motion.div>
  );
};



export default AnimationDelay;
