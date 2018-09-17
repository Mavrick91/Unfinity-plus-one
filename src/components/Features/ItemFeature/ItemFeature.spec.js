// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemFeature from './ItemFeature';

describe('<ItemFeature />', () => {
  describe('without features', () => {
    const wrapper = shallow(<ItemFeature features={[]} />);

    it('should render ItemFeature', () => {
      expect(wrapper).to.have.lengthOf(1);
    });

    it('should not have `div` with className `feature_wrapper`', () => {
      expect(wrapper.find('.feature_wrapper')).to.have.lengthOf(0);
    });
  });

  describe('with features', () => {
    const features = [
      { id: 0, icon: 'icon', title: 'title', description: 'description' },
      { id: 1, icon: 'icon', title: 'title', description: 'description' },
      { id: 2, icon: 'icon', title: 'title', description: 'description' },
    ];

    const wrapper2 = shallow(<ItemFeature features={features} />);

    it('should have 3 `div` with className `feature_wrapper`', () => {
      expect(wrapper2.find('.feature_wrapper')).to.have.lengthOf(3);
    });

    it('should have 3 `FontAwesomeIcon`', () => {
      expect(wrapper2.find(FontAwesomeIcon)).to.have.lengthOf(3);
    });

    it('should have 3 `h4` for the title', () => {
      expect(wrapper2.find('h4')).to.have.lengthOf(3);
    });

    it('should have 3 `div` for the description', () => {
      expect(wrapper2.find('.item_description')).to.have.lengthOf(3);
    });
  });
});
