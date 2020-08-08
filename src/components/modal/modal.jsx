import React, {Component} from 'react';
//import './alert.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faThumbsUp, faBookmark, faPen, faHandPeace} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';


class UseModal extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let likeColor, saveColor, peopleLiked;
    this.props.IsLiked ? likeColor = 'blue' : likeColor = 'grey';
    this.props.IsSaved ? saveColor = 'red' : saveColor = 'grey';
    const {modalOpen, ImgSrc, ImgTitle, ImgDesc, LikeCount, closeModal} = this.props;
    LikeCount == 0 ? peopleLiked = `0 Likes` : peopleLiked = `${LikeCount} people liked it`;

    return(
      <Modal isOpen={modalOpen}>  {/*true*/}
        <h2><span className="btn btn-secondary" style={{borderRadius:"50%"}} onClick={closeModal}><b>X</b></span></h2>
        <div className="row">
          <div className="col-md-7">
            <img className="card-img-top img-thumbnail" src={ImgSrc} alt="img" />
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-text">{ImgTitle}</h2>

                {/*<span className="btn btn-primary" onClick={closeModal}>Close</span>*/}

                {/*Like Count*/}
                <p className="card-text">
                  <small className="text-muted"><b>{peopleLiked}</b></small>
                </p>

                <div className="">
                  {/*Like*/}
                  <span className="btn btn-light" style={{color: likeColor}} title="Vote up" onClick={this.props.FlipLike}><FontAwesomeIcon icon={faThumbsUp} /></span> &nbsp;

                  {/*Download*/}
                  <a className="btn btn-light" href={this.props.ImgSrc} download style={{color:'grey'}} title="Download"><FontAwesomeIcon icon={faDownload} /></a> &nbsp;

                  {/*Edit & Save*/}
                  <span className="btn btn-light" style={{color:"grey"}} title="Edit &amp; Save" onClick={this.props.EditSave}><FontAwesomeIcon icon={faPen} /></span> &nbsp;

                  {/*Save*/}
                  <span className="btn btn-light" style={{color:saveColor}} title="Save" onClick={this.props.FlipSave}><FontAwesomeIcon icon={faBookmark} /></span> &nbsp;
                </div>
                <br />
                <p className="card-text" style={{maxHeight:"300px", overflow:"auto"}}>{ImgDesc} </p>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
export default UseModal;
