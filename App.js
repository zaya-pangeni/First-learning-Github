import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
// import Greet from './Component/Greet'
// import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import State from './Component/State';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <FunctionClick />
        <ClassClick />
        <State />

        {/* <Greet/>
        <Welcome/> */}
        <Hello />
      </div>
    );
  }

}

export default App;