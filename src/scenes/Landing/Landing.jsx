import React, { PureComponent, Fragment } from "react";
import { HeaderLanding } from "../../components/HeaderLanding";
import { Concept } from "../../components/Concept";

import "./Landing.css";

class LandingPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="row">
          <HeaderLanding />
        </div>
        <div className="row">
          <Concept />
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;
