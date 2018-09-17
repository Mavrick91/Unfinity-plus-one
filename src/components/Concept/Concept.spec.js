// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Query } from 'react-apollo';

import TitleSection from '../TitleSection/TitleSection';
import ContainerSection from '../ContainerSection/ContainerSection';

import Concept from './Concept';

describe('<Concept />', () => {
  const wrapper = shallow(<Concept />);

  it('should render Concept', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  // it('should have 1 <Query />', () => {
  //   expect(wrapper.find(Query)).to.have.lengthOf(1);
  // });

  // it('should have 1 <ContainerSection />', () => {
  //   expect(
  //     wrapper
  //       .find(Query)
  //       .childAt(0)
  //       .type(),
  //   ).to.have.lengthOf(1);
  // });
});
