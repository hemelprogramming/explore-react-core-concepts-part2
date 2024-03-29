import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './counter';
import Team from './team';
import Users from './Users';
import Friends from './Friends';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>explore react core concept</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
    </>
  );
}

export default App;
