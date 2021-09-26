import Button from './Button';
import Card from './card';
import './App.css';
import { useState } from 'react';
var card = [];
function App() {
  const [cards, updateCards] = useState(0);
  function appendcard(){
    card.push(<Card key={cards}></Card>)
    updateCards(card.length+1);
    console.log(card.length)
  }
    
  return (
    <div className="App App-header">
      <Button styling="createBtn" performOp={appendcard}>
        +
      </Button>
      {card.map((elem, i)=>{
          console.log(elem)
          return <Card key={i}></Card>
      })}
      {/* {card} */}
    </div>
  );
}

export default App;
