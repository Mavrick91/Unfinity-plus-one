import React, { PureComponent } from "react";
import { HeaderLanding } from "../../components/HeaderLanding";

class LandingPage extends PureComponent {
  render() {
    return (
      <div className="row">
        <HeaderLanding />
      </div>
    );
  }
}

export default LandingPage;
