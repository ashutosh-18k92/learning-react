import React from 'react';
import './App.css';
import Greet from './components/functional/Greet'
import Welcome from './components/class/Welcome'

function App() {
  return (
    <div className="App">

      <Greet firstName="Ashutosh" lastName="Kumar">
        <p>Learning paramter passing to functional components.</p>
      </Greet>

      <Welcome firstName="Ashutosh" lastName="Kumar">
        <p>Learning parameter passing in Class components</p>
      </Welcome>

      <Welcome><p>JSX functions are pure functions - props are immutable.</p></Welcome>
    </div>
  );
}

export default App;
