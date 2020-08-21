import React, {Component} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faThumbsUp, faBookmark, faPen, faHandPeace} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

//VIDEO MODAL
class VideoModal extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount() {
      Modal.setAppElement('body');
  }

  render(){
    let likeColor, saveColor;
    this.props.IsLiked ? likeColor = 'blue' : likeColor = 'grey';
    this.props.IsSaved ? saveColor = 'red' : saveColor = 'grey';
    const {modalOpen, VidSrc, VidTitle, VidDesc, LikeCount, closeModal} = this.props;
    let peopleLiked;
    LikeCount == 0 ? peopleLiked = `0 Likes` : peopleLiked = `${LikeCount} people liked it`;

    let videoComponent;
    if(modalOpen){
      videoComponent = <video style={{width:"100%", height:"100%"}} controls>
        <source src={this.props.VidSrc} type="video/mp4" />
        Update the browser to watch video.
      </video>
    }else{
      videoComponent = <h2>LOADING...</h2>
    }

    return(
      <Modal isOpen={modalOpen}>  {/*true*/}
        <h2><span className="btn btn-secondary" style={{borderRadius:"50%"}} onClick={closeModal}><b>X</b></span></h2>
        <div className="row">
          <div className="col-md-7">
            {/*<img className="card-img-top img-thumbnail" src={ImgSrc} alt="img" />*/}
            <video style={{width:"100%", height:"100%"}} controls>
              <source src={this.props.VidSrc} type="video/mp4" />
              Update the browser to watch video.
            </video>
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-text">{VidTitle}</h2>

                {/*<span className="btn btn-primary" onClick={closeModal}>Close</span>*/}

                {/*Like Count*/}
                <p className="card-text">
                  <small className="text-muted"><b>{peopleLiked}</b></small>
                </p>

                <div className="">
                  {/*Like*/}
                  <span className="btn btn-light" style={{color: likeColor}} title="Vote up" onClick={this.props.FlipLike}><FontAwesomeIcon icon={faThumbsUp} /></span> &nbsp;

                  {/*Download*/}
                  <a className="btn btn-light" href={this.props.VidSrc} download style={{color:'grey'}} title="Download"><FontAwesomeIcon icon={faDownload} /></a> &nbsp;

                  {/*Edit & Save*/}
                  <span className="btn btn-light" style={{color:"grey"}} title="Edit &amp; Save" onClick={this.props.EditSave}><FontAwesomeIcon icon={faPen} /></span> &nbsp;

                  {/*Save*/}
                  <span className="btn btn-light" style={{color:saveColor}} title="Save" onClick={this.props.FlipSave}><FontAwesomeIcon icon={faBookmark} /></span> &nbsp;
                </div>
                <br />
                <p className="card-text" style={{maxHeight:"300px", overflow:"auto"}}>{VidDesc} </p>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  componentDidMount(){
    //console.log(this.props.VidSrc);
  }
}
export default VideoModal;
