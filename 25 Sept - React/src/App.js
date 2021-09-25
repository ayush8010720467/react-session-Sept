import './App.css';
import ToggleBtn from './toggleBtn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleBtn text='Home'></ToggleBtn>
        <ToggleBtn text='About'></ToggleBtn>
        <ToggleBtn text='Contact us'></ToggleBtn>
      </header>
    </div>
  );
}

export default App;
