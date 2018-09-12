// @flow

import React, { Fragment } from 'react';
import HeaderLanding from '../../components/HeaderLanding';
import Concept from '../../components/Concept';
import Features from '../../components/Features';

import './Landing.css';

const sections = [HeaderLanding, Concept, Features];

const LandingPage = () => (
  <Fragment>
    {sections.map(section => (
      <div className="row">{section}</div>
    ))}
  </Fragment>
);

export default LandingPage;
