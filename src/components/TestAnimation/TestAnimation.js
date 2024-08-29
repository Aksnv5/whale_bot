import React, { useState } from 'react';

function Animation({ initialCount }) {
  const [count, setCount] = useState(0);

  // Функция увеличения значения count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
}

export default Animation;