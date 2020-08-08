import React, {Component} from 'react';
import './alert.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//toast.configure();
class TestAlert extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div>TEST ALERT</div>
    );
  }
}
export default TestAlert;
