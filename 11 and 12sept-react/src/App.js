import { useState } from 'react';
import './App.css';
import Btn from './btn'
import Value from './value'

function App() {
  let [counter,updateCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Btn sign='-' performOp={()=>{updateCounter(counter-1);}}></Btn>
        <Value value={counter}></Value>
        <Btn sign='+' performOp={()=>{updateCounter(++counter);}}></Btn>
      </header>
    </div>
  );
}

export default App;
