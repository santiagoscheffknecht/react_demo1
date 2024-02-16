import React from 'react';
import './App.css';
import ListPartContainer from './componentsCard/listPartContainer';
import Buttoncomponents from './componentsButton/buttoncomponents';
import PCardContainer from './componentsPCard/PCardContainer';
function App() {
  return (
    <div className="App">
      <div className="List"><ListPartContainer /></div>

      <div className="Button"><Buttoncomponents /></div>

      <div className='PCard'><PCardContainer /> </div>

    </div>
  );
}

export default App;
