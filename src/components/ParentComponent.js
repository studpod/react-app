import React, { useState, useCallback, useMemo } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0); // Стан для лічильника
  const [text, setText] = useState('Hello'); // Стан для тексту
  const [factor, setFactor] = useState(2); // Стан для додаткового обчислення

  // Функція для збільшення лічильника
  const incrementCounter = () => setCount(count + 1);

  // Мемоізована функція обробки кліку
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  // Використання useMemo для обчислення значення на основі фактору
  const computedValue = useMemo(() => {
    console.log('Computing value...');
    return factor * 10;
  }, [factor]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Increase Counter</button>

      <h2>Computed Value: {computedValue}</h2>
      <button onClick={() => setFactor(factor + 1)}>Increase Factor</button>

      <ChildComponent onButtonClick={handleClick} text={text} />

      <button onClick={() => setText(text === 'Hello' ? 'Goodbye' : 'Hello')}>
        Change Text
      </button>
    </div>
  );
}

export default ParentComponent;
