// @flow

import React, { PureComponent } from 'react';

import './TitleSection.css';

type Props = {
  title: string,
  subtitle: string,
};

export default class TitleSection extends PureComponent<Props> {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="row pb-sm-5 pb-5">
        <div className="title-section_wrapper col-md-7 col-sm-9 mx-auto ">
          <h1 className="title-section_title">{title}</h1>
          <p className="title-section_description text-muted">{subtitle}</p>
        </div>
      </div>
    );
  }
}
