// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import ButtonScroll from './ButtonScroll';

describe('<ButtonScroll />', () => {
  const wrapper = shallow(<ButtonScroll />);

  it('should render ButtonScroll', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 1 component <AnchorLink />', () => {
    expect(wrapper.find(AnchorLink)).to.have.lengthOf(1);
  });

  it('should have 1 div with className `button_scroll`', () => {
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('button_scroll'),
    ).to.equals(true);
  });

  it('should have 1 div with className `button_scroll-dot`', () => {
    expect(
      wrapper
        .find('div')
        .at(1)
        .hasClass('button_scroll-dot'),
    ).to.equals(true);
  });
});
