// @flow

import React from 'react';
import InViewMonitor from 'react-inview-monitor';
import ItemFeature from './ItemFeature';
import TitleSection from '../TitleSection';
import ContainerSection from '../ContainerSection';

import './Features.css';

const Features = () => (
  <ContainerSection backgroundColor="#f8f8f8">
    <TitleSection
      title="Theme Key Features"
      subtitle="Unfinity Plus is one of the best collections of landing pages with modern touch,
      very well polished, responsive, elegant one page website. It is very easy to customize."
    />
    <div className="row">
      <InViewMonitor
        classNameNotInView="vis-hidden"
        classNameInView="animated fadeIn container-fluid"
      >
        <ItemFeature />
      </InViewMonitor>
    </div>
  </ContainerSection>
);

export default Features;
