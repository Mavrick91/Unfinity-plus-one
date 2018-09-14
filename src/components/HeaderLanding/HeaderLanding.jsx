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

      const picturesStyled = [
        { picture: pictures[0], left: '0%', bottom: '-10%', zIndex: '10' },
        { picture: pictures[3], left: '10%', bottom: '0%', zIndex: '0' },
        { picture: pictures[4], left: '72%', bottom: '-10%', zIndex: '0' },
        { picture: pictures[1], left: '81%', bottom: '0%', zIndex: '10' },
        { picture: pictures[2], left: '88%', bottom: '-5%', zIndex: '20' },
      ];

      return (
        <div className="col-md-12 header_container">
          <div className="col-md-12 header_container-scale">
            <div className="d-none d-sm-none d-md-block">
              {picturesStyled.map((item) => (
                <ImagesSide
                  picture={item.picture}
                  left={item.left}
                  bottom={item.bottom}
                  zIndex={item.zIndex}
                />
              ))}
            </div>
            <div className="header-basis header-basis-intro header_intro">
              <Logo title={title} subtitle={subtitle} logo={logo} />
              <ButtonScroll />
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

export default HeaderLanding;
