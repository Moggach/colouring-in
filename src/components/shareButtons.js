import React, { Component } from 'react';
import './sharebuttons.css';
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TwitterShareButton,
  WhatsappIcon,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
} from 'react-share';

export default class ShareButtons extends Component {
  render() {
    const shareUrl = 'https://moggach.github.io/colouring-in/';
    return (
      <div>
        <EmailShareButton url={shareUrl} className="icon">
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
        <TwitterShareButton url={shareUrl} className="icon">
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={shareUrl} className="icon">
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} className="icon">
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
      </div>
    );
  }
}
