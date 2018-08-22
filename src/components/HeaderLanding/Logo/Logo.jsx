import React, { PureComponent } from "react";

import logoSlider from "../../../images/logo-slider.png";

import "./Logo.css";

class Logo extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 logo_intro">
          <img src={logoSlider} alt="" />
          <div className="logo_intro-first">
            One Page Multi-Purpose WordPress Theme
          </div>
          <div className="logo_intro-second">
            We provide most unique premium template for you.
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
