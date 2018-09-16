// @flow

import React from 'react';
import InViewMonitor from 'react-inview-monitor';
import { Query } from 'react-apollo';

import DisplayConcept from './DisplayConcept';
import TitleSection from '../TitleSection';
import ContainerSection from '../ContainerSection';
import { conceptQuery } from '../../utils/queries/landingePage';

import './Concept.css';

const Concept = () => (
  <Query query={conceptQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div />;
      if (error) return <p>Error :(</p>;

      const { title, subtitle, concepts } = data.concept;

      return (
        <ContainerSection id="concept">
          <TitleSection title={title} subtitle={subtitle} />
          <div className="row">
            <InViewMonitor
              classNameNotInView="vis-hidden"
              classNameInView="animated fadeInUp container-fluid"
            >
              <DisplayConcept concepts={concepts} />
            </InViewMonitor>
          </div>
        </ContainerSection>
      );
    }}
  </Query>
);

export default Concept;
