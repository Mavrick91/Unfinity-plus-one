// @flow

import React from 'react';
import { Query } from 'react-apollo';

import Logo from './Logo';
import ButtonScroll from './ButtonScroll';
import ImagesSide from './ImagesSide';
import { headerQuery } from '../../utils/queries/landingePage';

import './HeaderLanding.css';

const HeaderLanding = () => (
  <Query query={headerQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div />;
      if (error) return <p>Error :(</p>;

      const { title, subtitle, logo, pictures } = data.header;

      return (
        <div className="col-md-12 header_container">
          <div className="col-md-12 header_container-scale">
            <div className="header-basis header_image">
              <ImagesSide pictures={[pictures[2], pictures[4]]} />
            </div>
            <div className="header-basis header-basis-intro header_intro">
              <Logo title={title} subtitle={subtitle} logo={logo} />
              <ButtonScroll />
            </div>
            <div className="header-basis header_image">
              <ImagesSide pictures={[pictures[0], pictures[3], pictures[1]]} />
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

export default HeaderLanding;
