// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ImagesSide from './ImagesSide';

describe('<ImagesSide />', () => {
  const wrapper = shallow(
    <ImagesSide
      picture="picture"
      bottom="bottom"
      left="left"
      zIndex="zIndex"
    />,
  );

  it('should render ImagesSide', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have container with the given style', () => {
    expect(wrapper.find('div').props().style).to.contain({
      bottom: 'bottom',
      left: 'left',
      zIndex: 'zIndex',
    });
  });

  it('should have 1 `img`', () => {
    expect(wrapper.find('img').length).to.equals(1);
  });
});
