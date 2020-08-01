import React, { Component } from 'react';
import './navBar.css';
import Home from '../loadPages/home/home.jsx';
import Audio from '../loadPages/audio/audio.jsx';
import Video from '../loadPages/video/video.jsx';
import Image from '../loadPages/image/image.jsx';
import DefaultPage from '../loadPages/defaultPage.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

//import TestCompo from './testCompo.jsx';
//import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      tabLink: [
        {label: 'MemeJar', link: '/home', isActive: true},
        {label: 'Image', link: '/image', isActive: false},
        {label: 'Video', link: '/video', isActive: false},
        {label: 'Audio', link: '/audio', isActive: false}
      ]
    };
    this.MenuClick = this.MenuClick.bind(this);
  }
  render(){
    {/*Link tag*/}
    let tabMenu = this.state.tabLink.map( (itemOb, index) => {
      //var myclass = 'nav-item';
      var isActive = 'nav-item';
      if(itemOb.isActive === true){
        isActive += ' activeTab';
      }
      return(
        <li className={isActive} key={index}>
          {/*This Link tag comes from react-routes as a replacement of anchor tag for obvious reasons*/}
          <Link className="nav-link navItems" to={itemOb.link} onClick={()=> this.MenuClick(index)} >{itemOb.label}</Link>
        </li>
      );
    });

    return(
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {tabMenu}
            </ul>
          </div>
          <span id="localVal">{/*I don't know what it is for*/}</span>
        </nav>

        {/*Routes from manageRoutes*/}
        <AllRoutes />
      </Router>
    );
  }

  MenuClick(index){
    this.state.tabLink.filter((xxx, index) => {
      if(xxx.isActive === true){
        xxx.isActive = false;
      }
    });
    //console.log(myArr);
    const newArr = [...this.state.tabLink];
    newArr[index] = {...newArr[index], isActive: !newArr[index].isActive}
    this.setState({
      tabLink: newArr,
    });
    //, () => {console.log(this.state.tabLink[index].isActive)}
  }
}
export default NavBar;

//To manage Routes in one place. Might get complex later.
class AllRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/audio' component={Audio} />
        <Route path='/video' component={Video} />
        <Route path='/image' component={Image} />
        <Route component={DefaultPage} />
      </Switch>
    );
  }
}
/*To set a default page if none matches the route, we use Switch here.
As it can be seen the last Route has no "path" attribute, setting it as the default display page.*/
