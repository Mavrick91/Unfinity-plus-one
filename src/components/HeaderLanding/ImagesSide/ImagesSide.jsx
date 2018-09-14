// @flow

import React, { PureComponent } from 'react';
import './ImagesSide.css';

type Props = {
  picture: string,
  top: string,
  left: string,
  zIndex: string,
};

export default class ImagesSide extends PureComponent<Props> {
  render() {
    const { picture, top, left, zIndex } = this.props;

    return (
      <div
        className="images_container"
        style={{
          left,
          top,
          zIndex,
        }}
      >
        <img
          src={picture}
          alt=""
          style={{
            boxShadow: '5px 5px 10px #111',
            height: '300px',
          }}
        />
      </div>
    );
  }
}
