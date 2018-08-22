import React, { PureComponent } from "react";
import { Logo } from "./Logo";
import { ButtonScroll } from "./ButtonScroll";
import { ImagesSide } from "./ImagesSide";

import layerVent from "../../images/layer-vent.png";
import layerHospital from "../../images/layer-hospital.png";
import layerAwyer from "../../images/layer-awyer.png";
import layerTranport from "../../images/layer-transport.png";
import layerConstruction from "../../images/layer-construction.png";

import "./HeaderLanding.css";

class HeaderLanding extends PureComponent {
  render() {
    return (
      <div className="col-md-12 header_container">
        <div className="col-md-12 header_container-scale">
          <div className="header-basis header_image">
            <ImagesSide pictures={[layerHospital, layerVent]} />
          </div>
          <div className="header-basis header-basis-intro header_intro">
            <Logo />
            <ButtonScroll />
          </div>
          <div className="header-basis header_image">
            <ImagesSide
              pictures={[layerAwyer, layerTranport, layerConstruction]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderLanding;
