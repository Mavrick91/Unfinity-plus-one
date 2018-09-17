// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DisplayConcept from './DisplayConcept';

describe('<DisplayConcept />', () => {
  describe('without concepts', () => {
    const wrapper = shallow(<DisplayConcept concepts={[]} />);

    it('should render DisplayConcept', () => {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should not have `div` with className `display-concept_item`', () => {
      expect(wrapper.find('.display-concept_item')).to.have.lengthOf(0);
    });
  });

  describe('with concepts', () => {
    const concepts = [
      { id: 0, picture: 'picture', title: 'title' },
      { id: 1, picture: 'picture', title: 'title' },
      { id: 2, picture: 'picture', title: 'title' },
    ];

    const wrapper2 = shallow(<DisplayConcept concepts={concepts} />);

    it('should have 3 `div` with className `display-concept_item`', () => {
      expect(wrapper2.find('.display-concept_item')).to.have.lengthOf(3);
    });

    it('should have 3 `img`', () => {
      expect(wrapper2.find('img')).to.have.lengthOf(3);
    });

    it('should have 3 `h5`', () => {
      expect(wrapper2.find('h5')).to.have.lengthOf(3);
    });
  });
});
