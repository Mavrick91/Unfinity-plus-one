// @flow

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ContainerSection from './ContainerSection';

describe('<ContainerSection />', () => {
  const wrapper = shallow(<ContainerSection />);

  describe('without props', () => {
    it('should not have id', () => {
      expect(wrapper.find('div').props().id).to.equals(null);
    });

    it('should have white background', () => {
      expect(wrapper.find('div').props().style).to.contain({
        background: 'white',
      });
    });

    it('should not have children', () => {
      expect(wrapper.find('div').props().children).to.equals(undefined);
    });
  });

  describe('with props', () => {
    const wrapper2 = shallow(
      <ContainerSection id="haha" backgroundColor="red">
        I am a children
      </ContainerSection>,
    );
    it('should have id', () => {
      expect(wrapper2.find('div').props().id).to.equals('haha');
    });

    it('should have red background', () => {
      expect(wrapper2.find('div').props().style).to.contain({
        background: 'red',
      });
    });

    it('should have 1 children', () => {
      expect(wrapper2.find('div').props().children).to.equals(
        'I am a children',
      );
    });
  });
});
