// @flow

import React from 'react';

import './Logo.css';

type Props = {
  title: string,
  subtitle: string,
  logo: string,
};

const Logo = ({ title, subtitle, logo }: Props) => (
  <div className="row">
    <div className="col-md-12 logo_intro">
      <img src={logo} alt="" />
      <div className="logo_intro-first">{title}</div>
      <div className="logo_intro-second">{subtitle}</div>
    </div>
  </div>
);

export default Logo;
