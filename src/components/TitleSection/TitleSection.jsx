// @flow

import React, { PureComponent } from 'react';

type Props = {
  title: string,
  subtitle: string
};

export default class TitleSection extends PureComponent<Props> {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="row py-md-5">
        <div className="col-md-5 mx-auto">
          <h1 className="concept_title">{title}</h1>
          <p className="concept_description">{subtitle}</p>
        </div>
      </div>
    );
  }
}
