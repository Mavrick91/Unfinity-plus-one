// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HeaderLanding from '../../components/HeaderLanding/HeaderLanding';
import Concept from '../../components/Concept/Concept';
import Features from '../../components/Features/Features';

import Landing from './Landing';

describe('<Landing />', () => {
  const wrapper = shallow(<Landing />);

  it('should render Landing', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 1 component <HeaderLanding />', () => {
    expect(wrapper.find(HeaderLanding)).to.have.lengthOf(1);
  });

  it('should have 1 component <Concept />', () => {
    expect(wrapper.find(Concept)).to.have.lengthOf(1);
  });

  it('should have 1 component <Features />', () => {
    expect(wrapper.find(Features)).to.have.lengthOf(1);
  });
});
