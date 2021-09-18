import { useState } from 'react';
import './App.css';
import Btn from './btn'
import Value from './value'

function App() {
  let [counter,updateCounter] = useState(0);
  let arr = [];
  function takeInp(inp){arr.push(inp); console.log(arr);}
  return (
    <div className="App">
      <header className="App-header">
        <Btn sign='-' takeInp={takeInp} performOp={()=>{updateCounter(counter-1);}}></Btn>
        <Value value={counter}></Value>
        <Btn sign='+' performOp={()=>{updateCounter(++counter);}} takeInp={takeInp}></Btn>
      </header>
    </div>
  );
}

export default App;
