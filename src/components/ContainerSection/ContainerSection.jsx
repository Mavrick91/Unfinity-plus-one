import React, { PureComponent } from "react";

export default class ContainerSection extends PureComponent {
  render() {
    const { backgroundColor } = this.props;

    return (
      <div
        className="col-md-12"
        style={{
          background: `${backgroundColor ? backgroundColor : "white"}`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
