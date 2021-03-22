import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/stateless/Greet'
import Bye from './components/stateless/Bye'
import Test from './components/stateless/Test'

function App() {
  return (
    <div className="App">
      <Greet /> 
      <Bye />
      <Test />
    </div>
  );
}

export default App;
