import React, { PureComponent } from "react";
import InViewMonitor from "react-inview-monitor";
import { DisplayConcept } from "./DisplayConcept";

import "./Concept.css";

export default class Concept extends PureComponent {
  render() {
    return (
      <div className="col-md-12">
        <div className="row py-md-5">
          <div className="col-md-5 mx-auto">
            <h1 className="concept_title">CHOOSE A CONCEPT</h1>
            <p className="concept_description">
              Modern, easily importable, and highly customizable demo layouts.
              Create your website without any effort, quickly and easily!
            </p>
          </div>
        </div>
        <div className="row">
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp container-fluid"
          >
            <DisplayConcept />
          </InViewMonitor>
        </div>
      </div>
    );
  }
}
