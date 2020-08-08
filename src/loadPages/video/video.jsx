import React, { Component } from 'react';
import './video.css';
import ImgMist from '../#indesign/mist.jpg';
import ImgNature from '../#indesign/nature.jpg';
import ImgOcean from '../#indesign/ocean.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faThumbsUp, faBookmark, faPen, faPlay} from '@fortawesome/free-solid-svg-icons';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseModal from '../../components/modal/modal.jsx';

toast.configure();
class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return( <AudioBody /> );
  }
}
export default Audio;

{/*VideoBody Component*/}
class AudioBody extends Component{
  render(){
    return(
      <div className="content-wrapper">
        {/*Page Header*/}
        <div className="content-header">
        	<div className="container-fluid">
        	  <div className="row mb-2">
        	    <div className="col-sm-12">
        	      <h1 className="m-0 text-dark">The Video Body</h1>
        	    </div>
        	  </div>
        	</div>
        </div>

        {/*Page Body*/}
        <section className="content">
          <div className="container-fluid">

            {/*CARD*/}
            <div className="card card-default"> {/*text-white bg-dark*/}

              {/*Card Header*/}
              <div className="card-header">
                <div className="card-title float-right"><b>Add Search Bar</b></div>
              </div>

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
        {imgTitle: 'Video Card 1', imgSrc: ImgMist, imgDesc: 'desc 1', imgUpdate: 'Last updated 1 mins ago'},
        {imgTitle: 'Video Card 2', imgSrc: ImgNature, imgDesc: 'desc 2', imgUpdate: 'Last updated 2 mins ago'},
        {imgTitle: 'Video Card 3', imgSrc: ImgOcean, imgDesc: 'desc 3', imgUpdate: 'Last updated 3 mins ago'},
        {imgTitle: 'Video Card 4', imgSrc: ImgOcean, imgDesc: 'desc 4', imgUpdate: 'Last updated 4 mins ago'},
        {imgTitle: 'Video Card 5', imgSrc: ImgOcean, imgDesc: 'desc 5', imgUpdate: 'Last updated 5 mins ago'}
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
const saveToast = () => {
  return(
    <div>
      Item Saved. <span style={{color:"black"}}><b>View</b></span>
    </div>
  );
}
class SubCardGroup extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLiked: false,
      likeCount: 68,
      isSaved: false,
      saveCount: 0,
      imgStyle: {
        height: '200px',
        cursor: 'pointer',
        opacity: '0.8',
        transition: '1s'
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
      },
      modalOpen: false,
    };
    this.flipLike = this.flipLike.bind(this);
    this.flipSave = this.flipSave.bind(this);
    this.editAndSave = this.editAndSave.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render(){
    let likeColor, saveColor, peopleLiked;
    this.state.isLiked ? likeColor = {color: 'blue'} : likeColor = {color: 'grey'};
    this.state.isSaved ? saveColor = {color: 'red'} : saveColor = {color: 'grey'};
    this.state.likeCount == 0 ? peopleLiked = `0 Likes` : peopleLiked = `${this.state.likeCount} people liked it`;

    return(
      <div className="col-md-3" style={{padding:'0', textAlign:"left"}}>
        <div className="card" style={this.state.cardStyle}> {/*"width: 18rem;"*/}
          <img className="card-img-top imgxx" src={this.props.ImgSrc} alt="Card image" style={this.state.imgStyle} onClick={this.showModal} />
          <div className="card-body">
            <h5 className="card-title">{this.props.ImgTitle}</h5>
            {/*<p className="card-text">{this.props.ImgDesc}</p>*/}

            {/*Like Count*/}
            <p className="card-text">
              <small className="text-muted"><b>{peopleLiked}</b></small>
            </p>

            <p className="card-text">
              <label className="btn btn-light optBTN">
                {/*Like*/}
                <span className="cardLike" style={likeColor} title="Vote up" onClick={this.flipLike}><FontAwesomeIcon icon={faThumbsUp} /></span> &nbsp;
                {/*Download*/}
                <a href={this.props.ImgSrc} download style={{color:'grey'}} title="Download"><FontAwesomeIcon icon={faDownload} /></a> &nbsp;
                {/*Save*/}
                <span className="cardSave" style={saveColor} title="Save" onClick={this.flipSave}><FontAwesomeIcon icon={faBookmark} /></span> &nbsp;

                {/*Edit & Save (Should open modal)*/}
                <span className="editSave" style={{color:'grey'}} title="Edit &amp; Save" onClick={this.editAndSave}><FontAwesomeIcon icon={faPen} /></span>

                {/*Modal to open popup*/}
                <UseModal modalOpen={this.state.modalOpen} ImgTitle={this.props.ImgTitle} ImgSrc={this.props.ImgSrc} ImgDesc={this.props.ImgDesc} closeModal={this.closeModal} IsLiked={this.state.isLiked} LikeCount={this.state.likeCount} IsSaved={this.state.isSaved} FlipLike={this.flipLike} FlipSave={this.flipSave} EditSave={this.editAndSave}/>
              </label> <br />

            </p>

          </div>
        </div>

      </div>
    );
  }

  flipLike(){
    let opts = {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000
    };
    this.setState({
      isLiked: !this.state.isLiked,
    }, () => {
      if(this.state.isLiked === true){
        toast.info("Media liked", opts);
        this.setState({ likeCount: this.state.likeCount+1});
      }else{
        toast.info("Media unliked", opts);
        this.setState({ likeCount: this.state.likeCount-1});
      }
    });
    // this.state.isLiked === true ? this.setState({ likeCount: this.state.likeCount+1}) : this.setState({ likeCount: this.state.likeCount-1})

  }
  flipSave(){
    let opts = {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000
    };
    this.setState({
      isSaved: !this.state.isSaved,
      //AlertText: "Saved"
    }, ()=>{
      this.state.isSaved === true ? toast.error(saveToast, opts) : toast.error("Item removed", opts)
    });
  }

  editAndSave(){
    let opts = {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000
    };
    let eds = `COMING SOON!! This will open up an editing software and allow user to save or download image after editing.`;
    toast.warning(eds, opts);
    //console.log(eds);
  }

  showModal(){
    this.setState({
      modalOpen: true
    });
  }
  closeModal(){
    this.setState({
      modalOpen: false
    });
  }
}
