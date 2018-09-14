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
      <div className="row py-sm-5 py-4">
        <div className="title-section_wrapper col-md-7 col-sm-9 mx-auto ">
          <h1 className="concept_title">{title}</h1>
          <p className="concept_description">{subtitle}</p>
        </div>
      </div>
    );
  }
}
