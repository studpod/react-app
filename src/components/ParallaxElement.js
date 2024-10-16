import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ParallaxElement = ({ children, offset = 0.2, backgroundColor = "lightblue" }) => {
  const { scrollY } = useViewportScroll();


  const y = useTransform(scrollY, [0, 1000], [0, -offset * 1000]);

  return (
    <motion.div
      style={{
        y,
        height: '300px',
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        color: 'white',
        margin: '10px 0',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;
