import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  function handelAdd() {
    const newCount = count + 1;
    setCount(newCount);
  }
  function handelReduce() {
    const reduceCount = count - 1;
    setCount(reduceCount);
  }
  return (
    <div style={{ border: '2px solid yellow', padding: '20px' }}>
      <h1>Counter : {count}</h1>
      <button onClick={handelAdd}>Click me</button>
      <button onClick={handelReduce}>Reduce</button>
    </div>
  );
}
