// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Logo from './Logo';

describe('<Logo />', () => {
  const wrapper = shallow(
    <Logo title="title" subtitle="subtitle" logo="logo" />,
  );

  it('should render Logo', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 1 `img` with value logo', () => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
    expect(wrapper.find('img').props().src).to.equals('logo');
  });

  it('should have title', () => {
    expect(wrapper.find('.logo_intro-first').text()).to.equals('title');
  });

  it('should have description', () => {
    expect(wrapper.find('.logo_intro-second').text()).to.equals('subtitle');
  });
});
