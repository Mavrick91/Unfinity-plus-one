// @flow

import React from 'react';
import InViewMonitor from 'react-inview-monitor';
import { Query } from 'react-apollo';

import ItemFeature from './ItemFeature';
import TitleSection from '../TitleSection';
import ContainerSection from '../ContainerSection';
import { featureQuery } from '../../utils/queries/landingePage';
import './Features.css';

const Features = () => (
  <Query query={featureQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div />;
      if (error) return <p>Error :(</p>;

      const { title, subtitle, features } = data.feature;

      return (
        <ContainerSection backgroundColor="#f8f8f8">
          <TitleSection title={title} subtitle={subtitle} />
          <div className="row">
            <InViewMonitor
              classNameNotInView="vis-hidden"
              classNameInView="animated fadeIn container-fluid"
            >
              <ItemFeature features={features} />
            </InViewMonitor>
          </div>
        </ContainerSection>
      );
    }}
  </Query>
);

export default Features;
