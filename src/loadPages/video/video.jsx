import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <h1 className="video">Videos</h1>
    );
  }
}

export default Video;
