// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TitleSection from './TitleSection';

describe('<TitleSection />', () => {
  const wrapper = shallow(<TitleSection title="title" subtitle="subtitle" />);

  it('should render TitleSection', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have title', () => {
    expect(wrapper.find('h1').text()).to.equals('title');
  });

  it('should have subtitle', () => {
    expect(wrapper.find('p').text()).to.equals('subtitle');
  });
});
