import React from 'react';
import './App.css';
import { Component } from 'react';
import NavBar from './navBar/navBar.jsx';
//import RotatingLogo from './logo.svg';

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}
export default App;
