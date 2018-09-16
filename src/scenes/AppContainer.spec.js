// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import AppContainer from './AppContainer';

describe('<AppContainer />', () => {
  const wrapper = shallow(<AppContainer />);

  it('should render AppContainer', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 1 component <Route />', () => {
    expect(wrapper.find(Route)).to.have.lengthOf(1);
  });
});
