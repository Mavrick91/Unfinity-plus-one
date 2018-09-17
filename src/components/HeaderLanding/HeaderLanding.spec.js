// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HeaderLanding from './HeaderLanding';

describe('<HeaderLanding />', () => {
  const wrapper = shallow(<HeaderLanding />);

  it('should render HeaderLanding', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
