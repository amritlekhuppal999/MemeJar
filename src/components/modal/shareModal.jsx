import React, {Component} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faThumbsUp, faBookmark, faPen, faHandPeace} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';


//VIDEO MODAL
class ShareModal extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount() {
      Modal.setAppElement('body');
  }
  render(){
    const {modalOpen, shareLink} = this.props.ModalProps;
    return(
      <Modal isOpen={modalOpen}>  {/*true*/}
        <h2><span className="btn btn-secondary" style={{borderRadius:"50%"}} onClick={this.props.CloseShareModal}><b>X</b></span></h2>
        <br />
        <div className="row">
          <div className="col-md-12">
            <label>Share Link</label>
            <input className="form-control" type="text" name="shareLink" value={shareLink} readOnly/>{/*this.props.ShareLink*/}
          </div>
        </div>
      </Modal>
    );
  }

  componentDidMount(){
    //console.log(this.props.VidSrc);
  }

}
export default ShareModal;
