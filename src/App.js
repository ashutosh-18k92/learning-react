import React from 'react';
import './App.css';
import Greet from './components/functional/Greet'
import Welcome from './components/class/Welcome'
import Message from './components/class/Message'
import Day4 from './components/class/Day4';


function App() {
  return (
    <div className="App">

      <Greet firstName="Ashutosh" lastName="Kumar">
        <p>Learning paramter passing to functional components.</p>
      </Greet>

      <Welcome firstName="Ashutosh" lastName="Kumar">
        <p>Learning parameter passing in Class components</p>
      </Welcome>

      <Welcome>
        <p>JSX functions are pure functions - props are immutable.</p>
      </Welcome>

      <Message />

      <Day4>
        <div align='left'>
        <p><h1 align='center'>Day 4:  setState()</h1></p>
        <p>Always use setState() to change state of state variable, don't change states directly</p>
        <p>If you are changing the state based on perious state do not use the object approach use function approach</p>
        <p>Console logs -  after updating a state var should not follw the setState() rather should be passed
          as call back function)
        </p>
        </div>
      </Day4>

    </div>
  );
}

export default App;
