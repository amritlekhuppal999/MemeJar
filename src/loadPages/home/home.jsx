import React, { Component } from 'react';
import ImgLifeCycle from '../#indesign/componentLifeCycle.PNG'
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <h1 className="home">HOME</h1>
        <br />
        <h2 style={{color:"blue"}}>Component Life Cycle Diagram</h2>
        <img src={ImgLifeCycle}/>
      </div>

    );
  }
}

export default Home;
