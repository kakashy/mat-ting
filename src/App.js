import React from 'react';
import Navpane from './Components/Navpane'
import './App.css';
import TitleBar from './Components/Title-Bar'

function App() {
  return (
    <div className="App">
      <TitleBar 
      />
      <Navpane />
    </div>
  );
}

export default App;
