import React, { useState } from 'react';

function Counter() {
  // Initialize the state with a default value of 0
  const [count, setCount] = useState(0);

  // Function to increase count
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to decrease count
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default Counter;
