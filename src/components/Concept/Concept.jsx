import React, { PureComponent } from "react";
import InViewMonitor from "react-inview-monitor";
import { DisplayConcept } from "./DisplayConcept";
import { TitleSection } from "../TitleSection";
import { ContainerSection } from "../ContainerSection";

import "./Concept.css";

export default class Concept extends PureComponent {
  render() {
    return (
      <ContainerSection>
        <TitleSection
          title="CHOOSE A CONCEPT"
          subtitle="Modern, easily importable, and highly customizable demo layouts.
          Create your website without any effort, quickly and easily!"
        />
        <div className="row">
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp container-fluid"
          >
            <DisplayConcept />
          </InViewMonitor>
        </div>
      </ContainerSection>
    );
  }
}
