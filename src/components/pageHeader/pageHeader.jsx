import React, { Component } from 'react';
import './pageHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class PageHeader extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="pageHeader">
        <HeaderLeft />
        <HeaderCentre />
        <HeaderRight />
      </div>
    );
  }
}
export default PageHeader;

class HeaderLeft extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let spanx, categoryType = ['normie', 'moderate', 'dank', 'dark'];
    spanx = categoryType.map((item)=>{
      return <span className='popularTag'>{item}</span>;
    });

    return(
      <div className="headerLeft">
        {spanx}
      </div>
    );
  }
}

class HeaderCentre extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="headerCentre">
        {/*Header Centre*/}
      </div>
    );
  }
}

class HeaderRight extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="headerRight">
        {/*Search Bar*/}
        <input className="searchBar" type="text" name="search_bar" placeHolder="Search" />
        <FontAwesomeIcon className="searchIcon" icon={faSearch} />
      </div>
    );
  }
}
