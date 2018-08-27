import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import { Landing } from "./Landing";

class AppContainer extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

export default AppContainer;
