// @flow

import React, { PureComponent } from 'react';
import './ImagesSide.css';

type Props = {
  pictures: Array<string>,
};

export default class ImagesSide extends PureComponent<Props> {
  displayPictures = (pictures: Array<string>) => (
    <div className="images_wrapper">
      {pictures.map((picture, index) => (
        <img
          key={picture}
          src={picture}
          alt=""
          style={{
            marginLeft: `calc(80px * ${-index})`,
            marginBottom: `calc(80px * ${-index})`,
            boxShadow: '5px 5px 10px #111',
            height: '300px',
          }}
        />
      ))}
    </div>
  );

  render() {
    const { pictures } = this.props;

    return (
      <div className="images_container">{this.displayPictures(pictures)}</div>
    );
  }
}
