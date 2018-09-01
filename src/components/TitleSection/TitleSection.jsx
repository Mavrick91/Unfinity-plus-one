import React, { PureComponent } from "react";

export default class TitleSection extends PureComponent {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="col-md-5 mx-auto">
        <h1 className="concept_title">{title}</h1>
        <p className="concept_description">{subtitle}</p>
      </div>
    );
  }
}
