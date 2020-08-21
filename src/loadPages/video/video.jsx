import React, { Component } from 'react';
import './video.css';
import ImgMist from '../#indesign/mist.jpg';
import ImgNature from '../#indesign/nature.jpg';
import ImgOcean from '../#indesign/ocean.jpg';
import AppleSeed from '../#indesign/videos/AOT_APPLE_SEED.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faThumbsUp, faBookmark, faPen, faPlay, faShare} from '@fortawesome/free-solid-svg-icons';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoModal from '../../components/modal/videoModal.jsx';
import ShareModal from '../../components/modal/shareModal.jsx';
import PageHeader from '../../components/pageHeader/pageHeader.jsx';

toast.configure();
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="videoBody">
        <VideoBody />
      </div>
    );
  }
}
export default Video;

{/*VideoBody Component*/}
class VideoBody extends Component{
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
              <div className="card-header" style={{paddingBottom:"0"}}>
                <div className="card-title">
                  <PageHeader />
                </div>
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
      videoMemeCard: [
        {vidTitle: 'Video Card 1', vidSrc: AppleSeed, vidThubmnail: ImgMist, vidDesc: 'desc 1', vidUpdate: 'Last updated 1 mins ago', category: 'normie'},
        {vidTitle: 'Video Card 2', vidSrc: AppleSeed, vidThubmnail: ImgMist, vidDesc: 'desc 2', vidUpdate: 'Last updated 2 mins ago', category: 'medium'},
        {vidTitle: 'Video Card 3', vidSrc: AppleSeed, vidThubmnail: ImgMist, vidDesc: 'desc 3', vidUpdate: 'Last updated 3 mins ago', category: 'dank'},
        {vidTitle: 'Video Card 4', vidSrc: AppleSeed, vidThubmnail: ImgMist, vidDesc: 'desc 4', vidUpdate: 'Last updated 4 mins ago', category: 'dank'},
        {vidTitle: 'Video Card 5', vidSrc: AppleSeed, vidThubmnail: ImgMist, vidDesc: 'desc 5', vidUpdate: 'Last updated 5 mins ago', category: 'dark'}
      ],
      userPref: ['normie', 'medium', 'dank', 'dark'],
      shareModal: {
        modalOpen: false,
        shareLink: '',
      }
    };
    this.shareItem = this.shareItem.bind(this);
    this.closeShare = this.closeShare.bind(this);
  }

  render(){
    let myCard = this.state.videoMemeCard.map((itemObj, index) => {
      if(this.state.userPref.includes(itemObj.category)){
        return(
          <SubCardGroup key={index} VidTitle={itemObj.vidTitle} VidSrc={itemObj.vidSrc} VidDesc={itemObj.vidDesc} VidUpdate={itemObj.vidUpdate} VidThumbnail={itemObj.vidThubmnail} VidCategory={itemObj.category} Share={this.shareItem} />
        );
      }
    });

    return(
      <div className="row">
        {myCard}
        {/*<VideoModal />*/}
        <ShareModal ModalProps={this.state.shareModal} CloseShareModal={this.closeShare} />
      </div>
    );
  }

  //SHARE MODAL FUNCTIONS -----------------------------------------------------
  shareItem(objPara){
    console.log(objPara.shareLink);
    let chanegShare = {...this.state.shareModal, modalOpen: true, shareLink: objPara.shareLink};
    this.setState({
      shareModal: chanegShare
    });
  }
  closeShare(){
    this.setState({
      shareModal: {modalOpen: false}
    });
  }
  //---------------------------------------------------------------------------
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
    let likeColor, saveColor, peopleLiked, loadVideoModal;
    this.state.isLiked ? likeColor = {color: 'blue'} : likeColor = {color: 'grey'};
    this.state.isSaved ? saveColor = {color: 'red'} : saveColor = {color: 'grey'};
    this.state.likeCount == 0 ? peopleLiked = `0 Likes` : peopleLiked = `${this.state.likeCount} people liked it`;

    let shareVidObj = {
      shareLink: this.props.VidSrc,
      mimeType: 'video'
    }

    {/*Conditional Rendering of VideoModal*/}
    if(this.state.modalOpen){
      loadVideoModal = <VideoModal modalOpen={this.state.modalOpen} VidTitle={this.props.VidTitle} VidSrc={this.props.VidSrc} VidDesc={this.props.VidDesc} closeModal={this.closeModal} IsLiked={this.state.isLiked} LikeCount={this.state.likeCount} IsSaved={this.state.isSaved} FlipLike={this.flipLike} FlipSave={this.flipSave} EditSave={this.editAndSave} />;
    }
    else{ loadVideoModal = ''; }

    return(
      <div className="col-md-3" style={{padding:'0', textAlign:"left"}}>
        <div className="card" style={this.state.cardStyle}> {/*"width: 18rem;"*/}
          <img className="card-img-top imgxx" src={this.props.VidThumbnail} alt="Card image" style={this.state.imgStyle} onClick={this.showModal} />

          <div className="card-body">
            <h5 className="card-title">{this.props.VidTitle}</h5>
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
                <span className="editSave" style={{color:'grey'}} title="Edit &amp; Save" onClick={this.editAndSave}><FontAwesomeIcon icon={faPen} /></span> &nbsp;

                {/*Share*/}
                <span className="vidShare" style={{color:'grey'}} title="Share" onClick={() => {this.props.Share(shareVidObj)}}><FontAwesomeIcon icon={faShare} /></span>

                {/*Modal to open popup*/}
                {loadVideoModal}

              </label>
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
