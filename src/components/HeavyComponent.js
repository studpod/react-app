import React from 'react';

const HeavyComponent = () => {
  // Імітуємо складну логіку або об'ємну роботу
  const result = Array(1e7).fill('Heavy Computation').map((x) => x);
  return <div>{`Heavy component loaded with ${result.length} items.`}</div>;
};

export default HeavyComponent;
