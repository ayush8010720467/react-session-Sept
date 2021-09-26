import './App.css';
import ToggleBtn from './toggleBtn'
import Section from './section'
import { useState } from 'react';

function App() {
  const [showHome,updateShowHome] = useState(true);
  const [showAbout,updateShowAbout] = useState(true);
  const [showContactUs,updateShowContactUs] = useState(true);
  function toggleHome(){
    updateShowHome(!showHome);
  }
  function toggleAbout(){
    updateShowAbout(!showAbout);
  }
  function toggleContactUs(){
    updateShowContactUs(!showContactUs);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ToggleBtn text='Home' toggle={toggleHome}></ToggleBtn>
        <ToggleBtn text='About' toggle={toggleAbout}></ToggleBtn>
        <ToggleBtn text='Contact us' toggle={toggleContactUs}></ToggleBtn>
      </header>
      {showHome?<Section title="Home" desc='Home description'></Section>:<></>}
      {showAbout?<Section title="About" desc='About description'></Section>:<></>}
      {showContactUs?<Section title="Contact us" desc='Contact us description'></Section>:<></>}
    </div>
  );
}

export default App;
