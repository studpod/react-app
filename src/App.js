import React from 'react';
import ParallaxElement from './components/ParallaxElement';
import MovingElement from './components/CurveMovement';
import AnimatedBox from './components/AnimatedBox';
import AnimationDelay from './components/AnimationDelay';

const App = () => {
  return (
   <div>
    <div style={{ height: '100vh', display: 'flex',  alignItems: 'center' }}>
      <MovingElement />
    </div>
    <div>
      <ParallaxElement offset={0.1} backgroundColor="lightcoral">
        Елемент 1 (швидкість: 0.1)
      </ParallaxElement>
      <ParallaxElement offset={0.3} backgroundColor="lightseagreen">
        Елемент 2 (швидкість: 0.3)
      </ParallaxElement>
      <ParallaxElement offset={0.5} backgroundColor="lightblue">
        Елемент 3 (швидкість: 0.5)
      </ParallaxElement>
      <ParallaxElement offset={0.7} backgroundColor="lightgoldenrodyellow">
        Елемент 4 (швидкість: 0.7)
      </ParallaxElement>
      <ParallaxElement offset={1} backgroundColor="lightpink">
        Елемент 5 (швидкість: 1)
      </ParallaxElement>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <AnimatedBox />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      
      <AnimationDelay delay={0} backgroundColor="tomato" />
      <AnimationDelay delay={0.5} backgroundColor="dodgerblue" />
      <AnimationDelay delay={1} backgroundColor="seagreen" />
      <AnimationDelay delay={1.5} backgroundColor="purple" />
    </div>
    </div>
  );
};
 
export default App;