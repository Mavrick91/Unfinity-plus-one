import React, { PureComponent } from "react";

export default class ContainerSection extends PureComponent {
  render() {
    return <div className="col-md-12">{this.props.children}</div>;
  }
}
