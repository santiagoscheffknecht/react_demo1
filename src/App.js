import React from 'react';
import './App.css';
import ListPartContainer from './componentsCard/listPartContainer';
import Buttoncomponents from './componentsButton/buttoncomponents';
function App() {
  return (
    <div className="App">
      <div className="List"><ListPartContainer /></div>

      <div className="Button"><Buttoncomponents /></div>


    </div>
  );
}

export default App;
