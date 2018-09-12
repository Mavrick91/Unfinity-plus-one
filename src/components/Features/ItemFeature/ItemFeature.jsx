// @flow

import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllFeatures from "../../../services/features_data";

import "./ItemFeature.css";

export default class ItemFeature extends PureComponent<{}> {
  render() {
    return (
      <div className="col-md-12 item-feature_container">
        {AllFeatures.map((feature, index) => {
          return (
            <div key={index} className="feature_wrapper">
              <div className="item_icon">
                <FontAwesomeIcon icon={feature.icon} size="2x" color="white" />
              </div>
              <h4 className="item_title">{feature.title}</h4>
              <div className="item_description">{feature.description}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
