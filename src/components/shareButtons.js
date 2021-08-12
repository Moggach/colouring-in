import React, { Component } from 'react';

import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';

export default class ShareButtons extends Component {
  render() {
    const shareUrl = 'https://www.bbc.co.uk/';
    return (
      <div>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
      </div>
    );
  }
}
