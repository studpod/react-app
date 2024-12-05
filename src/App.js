import React, { useState } from 'react';
import _ from 'lodash';
import './App.css';

const NumberList = () => {
  const [numbers, setNumbers] = useState([]);
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  const generateRandomNumbers = () => {
    const newNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setNumbers(newNumbers);
    setSortedNumbers([]);
    setAverage(_.mean(newNumbers).toFixed(2));
  };

  const sortNumbers = () => {
    const sorted = _.sortBy(numbers);
    setSortedNumbers(sorted);
  };

  const filterEvenNumbers = () => {
    const filtered = _.filter(numbers, (num) => num % 2 === 0);
    setSortedNumbers(filtered);
  };

  return (
    <div className="App">
      <h1>Список випадкових чисел</h1>
      <button onClick={generateRandomNumbers}>Згенерувати новий список</button>
      <button onClick={sortNumbers}>Сортувати числа</button>
      <button onClick={filterEvenNumbers}>Фільтрувати парні числа</button>

      <div className="lists">
        <div>
          <h2>Початковий список</h2>
          <p>{numbers.join(', ') || 'Список порожній'}</p>
        </div>
        <div>
          <h2>Оброблений список</h2>
          <p>{sortedNumbers.join(', ') || 'Список порожній'}</p>
        </div>
      </div>

      <div>
        <h2>Середнє значення</h2>
        <p>{average !== null ? average : 'Ще не згенеровано'}</p>
      </div>
    </div>
  );
};

export default NumberList;