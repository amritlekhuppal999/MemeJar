import React, { Component } from 'react';
import './image.css';
import ImgMist from '../#indesign/mist.jpg';
import ImgNature from '../#indesign/nature.jpg';
import ImgOcean from '../#indesign/ocean.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faThumbsUp, faBookmark} from '@fortawesome/free-solid-svg-icons';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return( <ImageBody /> );
  }
}
export default Image;

{/*AudioBody Component*/}
class ImageBody extends Component{
  render(){
    return(
      <div className="content-wrapper">
        {/*Page Header*/} {/*
        <div className="content-header">
        	<div className="container-fluid">
        	  <div className="row mb-2">
        	    <div className="col-sm-6">
        	      <h1 className="m-0 text-dark">Audio</h1>
        	    </div>
        	  </div>
        	</div>
        </div>*/}

        {/*Page Body*/}
        <section className="content">
          <div className="container-fluid">
            <h1 className="">The Image Body</h1>

              {/*CARD*/}
              <div className="card card-default"> {/*text-white bg-dark*/}

                {/*Card Header*/}
                {/*<div className="card-header">
                  <div className="card-title">Card Header</div>
                </div>*/}

                {/*Card Body*/}
                <div className="card-body">
                  {/*call to CardGroup component*/}
                  <CardGorup />
                </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}

{/*CardGroup Component*/}
class CardGorup extends Component{
  constructor(props){
    super(props);
    this.state = {
      audioMemeCard: [
        {imgTitle: 'Card title 1', imgSrc: ImgMist, imgDesc: 'desc 1', imgUpdate: 'Last updated 1 mins ago'},
        {imgTitle: 'Card title 2', imgSrc: ImgNature, imgDesc: 'desc 2', imgUpdate: 'Last updated 2 mins ago'},
        {imgTitle: 'Card title 3', imgSrc: ImgOcean, imgDesc: 'desc 3', imgUpdate: 'Last updated 3 mins ago'},
        {imgTitle: 'Card title 4', imgSrc: ImgOcean, imgDesc: 'desc 4', imgUpdate: 'Last updated 4 mins ago'},
        {imgTitle: 'Card title 5', imgSrc: ImgOcean, imgDesc: 'desc 5', imgUpdate: 'Last updated 5 mins ago'}
      ],
    };
  }

  render(){
    let myCard = this.state.audioMemeCard.map((itemObj, index) => {
      return(
        <SubCardGroup key={index} ImgTitle={itemObj.imgTitle} ImgSrc={itemObj.imgSrc} ImgDesc={itemObj.imgDesc} ImgUpdate={itemObj.imgUpdate}/>
      );
    });

    return(
      <div className="row">
        {myCard}
      </div>
    );
  }
}

{/*SubCardGroup Component*/}
class SubCardGroup extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLiked: false,
      isSaved: false,
      imgStyle: {
        width: '100%',
        height: '15vw',
        //objectFit: 'cover',
        //boxShadow: '10px 10px 8px #888888'
      },
      cardStyle: {
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '3px',
        marginRight: '3px',
        padding: '0',
        //boxShadow: '10px 10px 8px #888888',
      },
      overlayStyle: {
        //display: 'none'
      }
    };
    this.flipLike = this.flipLike.bind(this);
    this.flipSave = this.flipSave.bind(this);
  }

  render(){
    let likeColor, saveColor;
    if(this.state.isLiked == false){
      likeColor = {color: 'white' };
    }else{ likeColor = {color: 'blue' }; }

    if(this.state.isSaved == false){
      saveColor = {color: 'white' };
    }else{ saveColor = {color: 'blue' }; }

    return(
      <div className="col-md-3" style={{padding:'0'}}>
        <div className="card bg-dark text-white" style={this.state.cardStyle}>
          <img className="card-img" src={this.props.ImgSrc} alt="Card image" style={this.state.imgStyle}/>
          <div className="card-img-overlay" style={this.state.overlayStyle}>
            <h5 className="card-title">{this.props.ImgTitle}</h5>
            {/*Description*/}
            <p className="card-text">{this.props.ImgDesc}</p>
              <br />
            {/*<p className="card-text">{this.props.ImgUpdate}</p>*/}
            <p className="card-text">
              {/*Like*/}
              <span class="cardLike" style={likeColor} title="Vote up" onClick={this.flipLike}><FontAwesomeIcon icon={faThumbsUp} /></span> &nbsp;
              {/*Download*/}
              <a href={this.props.ImgSrc} download style={{color:'white'}} title="Download"><FontAwesomeIcon icon={faDownload} /></a> &nbsp;
              {/*Save*/}
              <span class="cardSave" style={saveColor} title="Save" onClick={this.flipSave}><FontAwesomeIcon icon={faBookmark} /></span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  flipLike(){
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }
  flipSave(){
    this.setState({
      isSaved: !this.state.isSaved,
    });
  }
}
