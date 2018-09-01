import React, { PureComponent } from "react";
import InViewMonitor from "react-inview-monitor";
import { DisplayConcept } from "./DisplayConcept";
import { TitleSection } from "../TitleSection";

import "./Concept.css";

export default class Concept extends PureComponent {
  render() {
    return (
      <div className="col-md-12">
        <div className="row py-md-5">
          <TitleSection
            title="CHOOSE A CONCEPT"
            subtitle="Modern, easily importable, and highly customizable demo layouts.
          Create your website without any effort, quickly and easily!"
          />
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
