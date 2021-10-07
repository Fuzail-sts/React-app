import { useState } from 'react';
import './App.css';
import ClassComponent from './component/ClassComponent';
import FunctionalComponent from './component/FunctionalComponent';

function App() {
  const [inc, setInc] = useState(1);
  const handleClick = (passValue) => {
    setInc(inc + passValue);
  };
  
  return (
  <>
  <ClassComponent/>
  <FunctionalComponent value={inc} handleClick={handleClick} />
  </>
  );
}

export default App;
