// @flow

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './ButtonScroll.css';

const ButtonScroll = () => (
  <AnchorLink href="#concept">
    <div className="button_scroll">
      <div className="button_scroll-dot" />
    </div>
  </AnchorLink>
);

export default ButtonScroll;
