// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';

const AppContainer = () => (
  <div className="container-fluid">
    <Route exact path="/" component={Landing} />
  </div>
);

export default AppContainer;
