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
 const getCards = ()=>{
    return card.map((elem, i)=>{
      return (<Card key={i}>{i}</Card>)
  })
  }
    
  return (
    <div className="App App-header">
      <Button styling="createBtn" performOp={appendcard}>
        +
      </Button>
      {getCards()}
    </div>
  );
}

export default App;
